const fs = require('fs');
const beautify = require("json-beautify");
const fileName = './package.json';
const file = require(fileName);
const vs = file.version.split(".");

file.version = `${vs[0]}.${vs[1]}.${parseInt(vs[2]) + 1}`;
    
fs.writeFile(fileName, beautify(file, null, 2, 50), function writeJSON(err) {
    if (err) return console.log(err);
    // console.log(JSON.stringify(file));
    // console.log('writing to ' + fileName);
});