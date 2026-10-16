import assert from 'node:assert/strict';
import {sensitivityGrid} from './sensitivity.mjs';
const a=sensitivityGrid({trainingSeeds:3,testSeeds:3});
assert.equal(a.results.length,75);
for(const x of a.results){assert.equal(x.total,6);assert.ok(x.correct>=0&&x.correct<=6);}
assert.deepEqual(a,sensitivityGrid({trainingSeeds:3,testSeeds:3}));
console.log('PASS sensitivity grid; '+a.results.length+' cases');
