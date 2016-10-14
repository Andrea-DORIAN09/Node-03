var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, callback);
function callback(error, lista) 
{
var filtered = lista.filter(function(file){
return path.extname(file) === '.' + ext})
.join('\n'); 

console.log(filtered);
}

