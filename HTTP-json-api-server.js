var http = require('http');
var url = require('url');

function parsetime (time) {
  return {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
         }
                          }

function unixtime (time) {
  return { unixtime : time.getTime() 
         }
                         }

 var server = http.createServer(function (req, response) {
 var parsedUrl = url.parse(req.url, true)
 var time = new Date(parsedUrl.query.iso)
 var result

 if (/^\/api\/parsetime/.test(req.url)){
    result = parsetime(time)
}else if (/^\/api\/unixtime/.test(req.url)){
   result = unixtime(time)
}
 
if (result) {
   response.writeHead(200, { 'Content-Type': 'application/json' })
   response.end(JSON.stringify(result))
 } else {
   response.writeHead(404)
   response.end()
 }
})
server.listen(Number(process.argv[2]))
