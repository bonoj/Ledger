import assert from 'node:assert/strict';
import {createColumn,investigatorView,sample,syntheticBands,measuredSpectrum,verify} from './ice-column.mjs';
let checks=0;
for(const scenario of ['A_internal_irradiated','B_external_mixed','control'])for(let seed=0;seed<50;seed++){
 const config={scenario,seed},a=createColumn(config),b=createColumn(config);
 assert.deepEqual(a.cellsPublic,b.cellsPublic);checks++;
 assert.deepEqual(verify(a),{cells:100,compositionConserved:true,originNormalized:true});checks++;
 assert.equal(JSON.stringify(investigatorView(a)).includes('origin'),false);checks++;
 assert.equal(JSON.stringify(investigatorView(a)).includes('scenario'),false);checks++;
 const opts={recoveryFraction:.7,disturbanceFraction:.4,contaminationFraction:.05,contaminant:{waterIce:.8,naclEquivalent:.2}};
 assert.deepEqual(sample(a,.12,.18,opts),sample(b,.12,.18,opts));checks++;
 assert.deepEqual(syntheticBands(a,'sample-0001'),syntheticBands(b,'sample-0001'));checks++;
 assert.deepEqual(verify(a),{cells:100,compositionConserved:true,originNormalized:true});checks++;
 assert.throws(measuredSpectrum,/not validated/);checks++;
 assert.equal(a.samples[0].ledger.recoveredMassEquivalentM,.042);checks++;
 assert.equal(a.samples[0].ledger.lostMassEquivalentM,.018);checks++;
}
assert.notDeepEqual(createColumn({seed:1}).cellsPublic,createColumn({seed:2}).cellsPublic);checks++;
for(const cfg of [{seed:-1},{seed:1,cells:0},{seed:1,scenario:'bad'},{seed:1,depthM:0}]){assert.throws(()=>createColumn(cfg));checks++;}
const w=createColumn({seed:42});for(const options of [{recoveryFraction:-.1},{disturbanceFraction:2},{contaminationFraction:NaN},{contaminant:{waterIce:.5}}]){assert.throws(()=>sample(w,.1,.2,options));checks++;}
assert.throws(()=>sample(w,.2,.2));checks++;
const x=sample(w,.1,.2,{recoveryFraction:0,contaminationFraction:0});assert.equal(x.ledger.recoveredMassEquivalentM,0);checks++;
console.log('PASS',checks,'checks');