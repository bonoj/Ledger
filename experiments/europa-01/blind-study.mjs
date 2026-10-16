// EUROPA-01 Turn 8. Synthetic blind classification; NOT evidence about Europa.
import {createColumn,sample} from './ice-column.mjs';
import {syntheticSpectrum} from './virtual-measurements.mjs';
const scenarios=['A_internal_irradiated','B_external_mixed'];
const intervals=[[0,.04],[.58,.68]];
function features(spectrum){
 const band=nm=>{const k=spectrum.x.findIndex(x=>x>=nm);return 1-spectrum.y[k]};
 return [band(460),band(580),band(720)];
}
function observe(scenario,seed,depth,handling){
 const w=createColumn({scenario,seed});
 const xs=intervals.slice(0,depth?2:1).flatMap(([a,b],i)=>{
  // Controlled confusability: both hypotheses share the same surface observation.
  // This is an imposed observational equivalence, not a geological mechanism.
  const source=i===0?createColumn({scenario:scenarios[0],seed}):w;
  const s=sample(source,a,b,handling);
  return features(syntheticSpectrum(s,{seed:seed*3+i,noiseSigma:.002}));
 });
 return xs; // no world object, scenario, origin, or truth returned
}
const mean=xs=>xs[0].map((_,i)=>xs.reduce((s,x)=>s+x[i],0)/xs.length);
const dist=(a,b)=>a.reduce((s,v,i)=>s+(v-b[i])**2,0);
export function runBlindStudy({trainingSeeds=50,testSeeds=50,depth=false,handling={}}={}){
 if(!Number.isInteger(trainingSeeds)||trainingSeeds<2||!Number.isInteger(testSeeds)||testSeeds<1)throw Error('invalid seed counts');
 const centers=scenarios.map(s=>mean(Array.from({length:trainingSeeds},(_,seed)=>observe(s,seed,depth,handling))));
 const trials=[];
 for(let seed=trainingSeeds;seed<trainingSeeds+testSeeds;seed++)for(let label=0;label<2;label++){
  const xs=observe(scenarios[label],seed,depth,handling);
  const distances=centers.map(c=>dist(xs,c));
  const guess=distances[0]===distances[1]?-1:(distances[0]<distances[1]?0:1);
  const margin=Math.abs(distances[0]-distances[1])/(distances[0]+distances[1]+1e-12);
  trials.push({correct:guess===label,abstained:guess<0,margin});
 }
 return {schema:'europa-blind-study/v0',synthetic:true,depth,handling,trainingSeeds,testSeeds,
  correct:trials.filter(t=>t.correct).length,total:trials.length,
  accuracy:trials.filter(t=>t.correct).length/trials.length,
  uncertain:trials.filter(t=>t.margin<.1).length,
  method:'nearest class centroid; training labels known, test labels withheld until scoring',
  limitation:'synthetic class templates may be separable without real geological identifiability'};
}
export function studyMatrix(){
 return [
  runBlindStudy({depth:false}),
  runBlindStudy({depth:true}),
  runBlindStudy({depth:true,handling:{disturbanceFraction:1,contaminationFraction:.15,contaminant:{waterIce:1}}})
 ];
}
