
const fs = require('fs');

console.log(global);
console.clear;
console.trace(global);
global.hello=()=>{
    global.console.log("hello");
};

global.hello();
hello();
console.log("---------this--------");
console.log(this==module.exports);
function str (){
    
}