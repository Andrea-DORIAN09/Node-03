var fs = require('fs');
l =  0;

var data = fs.readFile(process.argv[2], 'UTF-8', callback);
function callback(error,data) 
{
if(data){
var string = data.toString().split('\n').length-1;
console.log(string);
        }
}
