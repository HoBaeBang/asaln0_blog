const path = require("path");
const os = require("os");

const folder = process.argv[2];
if(!folder){
    console.error(`please enter folder name in pictures`);
}

const workingDir = path.join(os.homedir(),'Pictures',folder);
console.log(workingDir);
