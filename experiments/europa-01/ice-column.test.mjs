import assert from 'node:assert/strict';
import {createColumn,investigatorView,sample,syntheticBands,measuredSpectrum,verify} from './ice-column.mjs';
let checks=0;
for(const scenario of ['A_internal_irradiated','B_external_mixed','control'])for(let seed=0;seed<50;seed++){
 const config={scenario,seed},a=createColumn(config),b=createColumn(config);
 assert.deepEqual(a.cellsPublic,b.cellsPublic);checks++;
 assert.deepEqual(verify(a),{cells:100,compositionConserved:true,originNormalized:true});checks++;
 assert.equal(JSON.stringify(investigatorView(a)).includes('origin'),false);checks++;
 assert.equal(JSON.stringify(investigatorView(a)).includes('scenario'),false);checks++;
 assert.deepEqual(sample(a,.12,.18),sample(b,.12,.18));checks++;
 assert.deepEqual(syntheticBands(a,'sample-0001'),syntheticBands(b,'sample-0001'));checks++;
 assert.throws(measuredSpectrum,/not validated/);checks++;
}
assert.notDeepEqual(createColumn({seed:1}).cellsPublic,createColumn({seed:2}).cellsPublic);checks++;
for(const cfg of [{seed:-1},{seed:1,cells:0},{seed:1,scenario:'bad'},{seed:1,depthM:0}]){assert.throws(()=>createColumn(cfg));checks++;}
console.log('PASS',checks,'checks');