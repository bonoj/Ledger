// EUROPA-01 null experiment: identical chemistry, independent measurement noise.
import {runBlindStudy} from './blind-study.mjs';
export function nullAudit({trainingSeeds=100,testSeeds=500,noiseSigma=.01}={}){
 const paired=runBlindStudy({trainingSeeds,testSeeds,depth:false,noiseSigma,noiseMode:'paired'});
 const independent=runBlindStudy({trainingSeeds,testSeeds,depth:false,noiseSigma,noiseMode:'independent'});
 const selective=runBlindStudy({trainingSeeds,testSeeds,depth:false,noiseSigma,noiseMode:'independent',abstainMargin:.1});
 const zeroNoise=runBlindStudy({trainingSeeds,testSeeds,depth:false,noiseSigma:0,noiseMode:'independent'});
 return {schema:'europa-null-audit/v0',synthetic:true,paired,independent,selective,zeroNoise,
  interpretation:'Under identical surface chemistry, nonzero independent noise can yield guesses. Any apparent accuracy is a null fluctuation or seed coupling, not proof of provenance.'};
}
