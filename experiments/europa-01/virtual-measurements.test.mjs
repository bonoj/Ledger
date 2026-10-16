import assert from 'node:assert/strict';
import {createColumn,sample} from './ice-column.mjs';
import {syntheticSpectrum,compareSpectra,laboratorySpectrum} from './virtual-measurements.mjs';
let checks=0;
for(const scenario of ['A_internal_irradiated','B_external_mixed','control']){
 for(let seed=0;seed<50;seed++){
  const w=createColumn({seed,scenario}),s=sample(w,.1,.2,{contaminationFraction:.05});
  const a=syntheticSpectrum(s,{seed}),b=syntheticSpectrum(s,{seed});
  assert.deepEqual(a,b);checks++;
  assert.equal(a.x.length,81);checks++;
  assert.equal(a.uncertainty.length,81);checks++;
  assert.equal(a.metadata.physicalCalibration,false);checks++;
  assert.equal(a.channel,'SYNTHETIC_VISIBLE_REFLECTANCE');checks++;
  assert.equal(compareSpectra(a,b).reducedChiSquare,0);checks++;
  assert.notDeepEqual(a.y,syntheticSpectrum(s,{seed:seed+1}).y);checks++;
 }
}
const w=createColumn({seed:10}),s=sample(w,.2,.3);
assert.throws(()=>syntheticSpectrum(s,{noiseSigma:-1}));checks++;
assert.throws(()=>syntheticSpectrum(s,{resolutionNm:0}));checks++;
assert.throws(()=>syntheticSpectrum(s,{points:1}));checks++;
assert.throws(()=>laboratorySpectrum(),/not ingested/);checks++;
const a=syntheticSpectrum(s,{noiseSigma:0});
assert.deepEqual(a.y,a.ideal);checks++;
assert.throws(()=>compareSpectra(a,a),/positive combined uncertainty/);checks++;
console.log('PASS',checks,'checks');
