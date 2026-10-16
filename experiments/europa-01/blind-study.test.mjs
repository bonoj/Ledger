import assert from 'node:assert/strict';
import {studyMatrix} from './blind-study.mjs';
const a=studyMatrix();
assert.equal(a.length,3);
assert.deepEqual(a,studyMatrix());
for(const x of a){assert.equal(x.total,100);assert.ok(x.accuracy>=0&&x.accuracy<=1);assert.equal(x.synthetic,true);}
console.log(JSON.stringify(a,null,2));
