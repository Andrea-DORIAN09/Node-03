/*var fs = require('fs');
var buf = fs.readFileSync('./text.txt');
var str = buf.toString();
var arr = str.split('\n');
var lenght = arr. length;
console.log(length);*/

//Se puede reducir a:

var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var string = buf.toString().split('\n').length-1;
console.log(string);

