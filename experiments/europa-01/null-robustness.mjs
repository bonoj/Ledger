// Synthetic null robustness across disjoint seed blocks.
import {runBlindStudy} from './blind-study.mjs';
export function nullRobustness({blocks=10,trainingSeeds=30,testSeeds=100,noiseSigma=.01}={}){
 if(!Number.isInteger(blocks)||blocks<2||blocks>100)throw Error('invalid blocks');
 const results=[];
 for(let b=0;b<blocks;b++){
  const base={seedOffset:b*(trainingSeeds+testSeeds),trainingSeeds,testSeeds,depth:false,noiseSigma,noiseMode:'independent'};
  const forced=runBlindStudy(base);
  const selective=runBlindStudy({...base,abstainMargin:.1});
  results.push({block:b,forcedCorrect:forced.correct,forcedTotal:forced.total,selectiveCorrect:selective.correct,selectiveAbstained:selective.abstained,selectiveTotal:selective.total});
 }
 const total=results.reduce((s,r)=>s+r.forcedTotal,0);
 const forcedCorrect=results.reduce((s,r)=>s+r.forcedCorrect,0);
 const selectiveAccepted=results.reduce((s,r)=>s+r.selectiveTotal-r.selectiveAbstained,0);
 const selectiveCorrect=results.reduce((s,r)=>s+r.selectiveCorrect,0);
 return {schema:'europa-null-robustness/v0',synthetic:true,blocks,results,
  forcedAccuracy:forcedCorrect/total,selectiveCoverage:selectiveAccepted/total,
  selectiveAccuracy:selectiveAccepted?selectiveCorrect/selectiveAccepted:null,
  limitation:'deterministic synthetic seed blocks; no physical calibration or independent geological truth'};
}
