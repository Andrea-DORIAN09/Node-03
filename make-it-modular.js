var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
fs.readdir(dir,function(error, data){
   
   if(error) {
   return callback(error);
   }
   
   var filtered = data
                 .filter(function(file){
                   return path.extname(file) === '.' + ext;
                 });
   callback(null, filtered);

 });
 };
