// Turn 8/9: controlled synthetic sensitivity grid, not a Europa engineering requirement.
import {runBlindStudy} from './blind-study.mjs';
export function sensitivityGrid({trainingSeeds=30,testSeeds=30}={}){
 const intervals=[[.05,.15],[.25,.35],[.45,.55],[.58,.68],[.75,.85]];
 const noise=[.002,.01,.03];
 const contamination=[0,.15,.5,.9,1];
 const results=[];
 for(const depthInterval of intervals)for(const noiseSigma of noise)for(const contaminationFraction of contamination){
  const handling={disturbanceFraction:1,contaminationFraction,contaminant:{waterIce:1}};
  const x=runBlindStudy({trainingSeeds,testSeeds,depth:true,depthInterval,noiseSigma,handling});
  results.push({depthInterval,noiseSigma,contaminationFraction,correct:x.correct,total:x.total,uncertain:x.uncertain});
 }
 return {schema:'europa-sensitivity/v0',synthetic:true,results,
  interpretation:'conditional separability in one toy model; not an instrument performance specification'};
}
