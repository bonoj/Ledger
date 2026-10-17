import assert from 'node:assert/strict';
import {observeRecoveredCore,compareObservableCores} from './observable-core.mjs';
const parcels=[{disposition:'recovered',position:[0,1,0],depth:0.1,materialId:1,unit:'lens'},{disposition:'recovered',position:[0,0,0],depth:1.1,materialId:5},{disposition:'dispersed',position:[1,0,0],depth:1.2,materialId:9}];
const observed=observeRecoveredCore(parcels,{seed:42,noiseSigma:0});
assert.equal(observed.attempted,2);
assert.equal(observed.observed,2);
assert.deepEqual(observed.measurements.map(m=>m.signal),[0.1,0.5]);
assert.deepEqual(observed,observeRecoveredCore(parcels.map(({unit,...p})=>p),{seed:42,noiseSigma:0}));
assert.equal(compareObservableCores(observed,observed).decision,'abstain');
assert.equal(observeRecoveredCore(parcels,{missingFraction:1}).observed,0);
assert.throws(()=>observeRecoveredCore(parcels,{noiseSigma:-1}));
console.log('PASS observable core');


const lens=Array.from({length:20},(_,i)=>({disposition:'recovered',position:[i*.01,0,0],depth:i*.1,materialId:9,unit:'hidden-lens'}));
const reference=lens.map(p=>({...p,materialId:1,unit:'hidden-reference'}));
const withoutTruth=p=>p.map(({unit,...visible})=>visible);
for(const seed of [1,7,42,741,2026]){
 const options={seed,noiseSigma:.04,missingFraction:.2,contaminationFraction:.1};
 const a=observeRecoveredCore(lens,options);
 assert.deepEqual(a,observeRecoveredCore(withoutTruth(lens),options));
 assert.equal(compareObservableCores(a,a).decision,'abstain');
 assert.ok(a.observed<=a.attempted);
}
assert.equal(compareObservableCores(observeRecoveredCore(lens,{noiseSigma:0}),observeRecoveredCore(reference,{noiseSigma:0})).decision,'first-higher');
assert.equal(compareObservableCores(observeRecoveredCore(lens,{missingFraction:1}),observeRecoveredCore(reference)).decision,'abstain');
console.log('PASS truth-blind controls');
