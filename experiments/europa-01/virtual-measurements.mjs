// EUROPA-01 Turn 7: SYNTHETIC forward model, not a calibrated Europa spectrometer.
const round=x=>Math.round(x*1e12)/1e12;
const hash=(seed,key)=>{let h=seed>>>0;for(let i=0;i<key.length;i++){h=Math.imul(h^key.charCodeAt(i),16777619)>>>0;}return h>>>0};
const random=seed=>{let s=seed>>>0;return()=>{s=(s+0x6d2b79f5)>>>0;let t=s;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}};
const peak=(x,center,width)=>Math.exp(-.5*((x-center)/width)**2);
export function syntheticSpectrum(sample,{seed=0,noiseSigma=0.002,resolutionNm=20,points=81}={}){
 if(!sample||!sample.id||!sample.composition)throw Error('sample required');
 if(!Number.isInteger(seed)||seed<0||seed>4294967295||!Number.isFinite(noiseSigma)||noiseSigma<0||!Number.isFinite(resolutionNm)||resolutionNm<=0||!Number.isInteger(points)||points<3||points>2000)throw Error('invalid instrument configuration');
 const c=sample.composition;
 if(['waterIce','naclEquivalent','P','Q','remainder'].some(k=>!Number.isFinite(c[k])||c[k]<0))throw Error('invalid sample composition');
 // Illustrative Gaussian bands; 460/580/720 nm are reference landmarks, NOT calibrated endmembers.
 const rng=random(hash(seed,sample.id)),x=[],y=[],ideal=[],uncertainty=[];
 for(let i=0;i<points;i++){
  const nm=400+i*500/(points-1);
  const width=Math.sqrt(18**2+(resolutionNm/2.355)**2);
  const signal=.72-.20*c.naclEquivalent*peak(nm,460,width)-.27*c.P*peak(nm,580,width)-.31*c.Q*peak(nm,720,width);
  const noisy=signal+(rng()-.5)*Math.sqrt(12)*noiseSigma;
  x.push(round(nm));ideal.push(round(signal));y.push(round(noisy));uncertainty.push(noiseSigma);
 }
 return {schema:'europa-synthetic-spectrum/v0',channel:'SYNTHETIC_VISIBLE_REFLECTANCE',sampleId:sample.id,wavelengthUnit:'nm',x,y,ideal,uncertainty,metadata:{seed,noiseSigma,resolutionNm,points,physicalCalibration:false,model:'illustrative-gaussian-mixture'}};
}
export function compareSpectra(a,b){
 if(a.channel!==b.channel||a.x.length!==b.x.length||a.x.some((v,i)=>v!==b.x[i]))throw Error('incompatible spectral grids');
 const variance=a.uncertainty.map((u,i)=>u*u+b.uncertainty[i]*b.uncertainty[i]);
 if(variance.some(v=>v<=0))throw Error('positive combined uncertainty required');
 return {reducedChiSquare:round(a.y.reduce((s,v,i)=>s+(v-b.y[i])**2/variance[i],0)/a.y.length),points:a.y.length,interpretation:'descriptive only; not a calibrated hypothesis likelihood'};
}
export function laboratorySpectrum(){throw Error('laboratory spectral archive not ingested or validated');}
