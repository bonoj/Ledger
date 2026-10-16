// EUROPA-01: deterministic synthetic substrate. No physical calibration.
// Turn 6: sample recovery and handling accounting.
export const VERSION='europa-ice-column/v0';
const rnd=seed=>{let s=seed>>>0;return()=>{s=(s+0x6d2b79f5)>>>0;let t=s;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}};
const r=x=>Math.round(x*1e12)/1e12;
export function createColumn({seed,depthM=1,cells=100,scenario='A_internal_irradiated'}){
 if(!Number.isInteger(seed)||seed<0||seed>4294967295)throw Error('uint32 seed required');
 if(!Number.isFinite(depthM)||depthM<=0||!Number.isInteger(cells)||cells<2||cells>10000)throw Error('invalid grid');
 if(!['A_internal_irradiated','B_external_mixed','control'].includes(scenario))throw Error('invalid scenario');
 const random=rnd(seed),dz=depthM/cells;
 const truth=Array.from({length:cells},(_,i)=>{
  const u=(i+.5)/cells,noise=(random()-.5)*.012;
  const internal=scenario==='A_internal_irradiated'?.75*Math.exp(-(((u-.64)/.22)**2)):.04;
  const external=scenario==='B_external_mixed'?.75*Math.exp(-3.4*u):.04;
  const naclEquivalent=r(Math.max(0,.02+.07*(internal+external)+noise));
  const parent=Math.max(0,.012+.035*(internal+external)+noise*.2);
  const radiationIndex=r(Math.exp(-9*u)),Q=r(parent*.55*radiationIndex),P=r(parent-Q),remainder=.02;
  const waterIce=r(1-naclEquivalent-P-Q-remainder),den=internal+external+.3;
  const initial=r(.3/den),inside=r(internal/den);
  return {zTopM:r(i*dz),zBottomM:r((i+1)*dz),temperatureK:r(95+8*u),
   texture:u<.15?'granular':u>.55?'compact':'mixed',
   fracture:scenario==='A_internal_irradiated'&&Math.abs(u-.64)<.15,
   radiationIndex,composition:{waterIce,naclEquivalent,P,Q,remainder},
   origin:{initial,internal:inside,external:r(1-initial-inside)}};
 });
 const cellsPublic=truth.map(({origin,...cell})=>({...cell}));
 return {config:{schema:VERSION,seed,depthM,cells,scenario},truth,cellsPublic,samples:[],actions:[],random};
}
export function investigatorView(w){return {schema:VERSION,depthM:w.config.depthM,cells:w.cellsPublic.map(c=>({zTopM:c.zTopM,zBottomM:c.zBottomM,texture:c.texture,fracture:c.fracture})),samples:w.samples.map(({id,interval,composition})=>({id,interval,composition}))};}
export function sample(w,top,bottom,options={}){
 if(!Number.isFinite(top)||!Number.isFinite(bottom)||top<0||bottom>w.config.depthM||top>=bottom)throw Error('invalid interval');
 const {recoveryFraction=1,disturbanceFraction=0,contaminationFraction=0,contaminant={waterIce:1}}=options;
 if(![recoveryFraction,disturbanceFraction,contaminationFraction].every(v=>Number.isFinite(v)&&v>=0&&v<=1))throw Error('invalid fractions');
 const species=['waterIce','naclEquivalent','P','Q','remainder'];
 if(!contaminant||species.some(k=>!Number.isFinite(contaminant[k]??0)||(contaminant[k]??0)<0)||Math.abs(species.reduce((s,k)=>s+(contaminant[k]??0),0)-1)>1e-9)throw Error('invalid contaminant');
 const shift=disturbanceFraction*w.config.depthM/w.config.cells;
 const windows=[[top,bottom,1-disturbanceFraction],[Math.max(0,top-shift),Math.min(w.config.depthM,bottom+shift),disturbanceFraction]];
 const weights=w.cellsPublic.map(c=>windows.reduce((s,[lo,hi,p])=>s+p*Math.max(0,Math.min(hi,c.zBottomM)-Math.max(lo,c.zTopM))/(hi-lo),0));
 const total=weights.reduce((a,b)=>a+b,0),composition={};
 for(const k of species){const native=w.cellsPublic.reduce((s,c,i)=>s+c.composition[k]*weights[i],0)/total;composition[k]=r((1-contaminationFraction)*native+contaminationFraction*(contaminant[k]??0));}
 const ideal=r(bottom-top),recovered=r(ideal*recoveryFraction);
 const result={id:'sample-'+String(w.samples.length+1).padStart(4,'0'),interval:[top,bottom],composition,recoveryFraction,disturbanceFraction,contaminationFraction,ledger:{idealMassEquivalentM:ideal,recoveredMassEquivalentM:recovered,lostMassEquivalentM:r(ideal-recovered),contaminantMassEquivalentM:r(recovered*contaminationFraction)}};
 w.samples.push(result);w.actions.push({type:'sample',top,bottom,options:{recoveryFraction,disturbanceFraction,contaminationFraction,contaminant:{...contaminant}},id:result.id});return result;
}
export function syntheticBands(w,id){
 const s=w.samples.find(x=>x.id===id);if(!s)throw Error('unknown sample');
 const noise=(w.random()-.5)*.006;
 const result={channel:'SYNTHETIC_TWO_BAND',sampleId:id,x:[0,1],y:[r(s.composition.P+noise),r(s.composition.Q-noise)],uncertainty:[.003,.003],synthetic:true};
 w.actions.push({type:'measure',result});return result;
}
export function measuredSpectrum(){throw Error('measured library not validated');}
export function verify(w){for(const c of w.truth){
 for(const k of ['composition','origin']){const a=Object.values(c[k]);if(a.some(v=>!Number.isFinite(v)||v<0)||Math.abs(a.reduce((x,y)=>x+y,0)-1)>1e-9)throw Error(k+' accounting failed');}
 }return {cells:w.truth.length,compositionConserved:true,originNormalized:true};}
