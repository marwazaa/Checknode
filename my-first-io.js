var fs = require("fs");

var cont = fs.readFileSync(process.argv[2]);
var lines = cont.toString().split("\n").length - 1;
console.log(lines);
