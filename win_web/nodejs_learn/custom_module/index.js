console.log('inside index.js');
// you have to give path in case of require
const mod=require('./mod');
console.log(mod);
console.log(mod.avg([2,3,4]));