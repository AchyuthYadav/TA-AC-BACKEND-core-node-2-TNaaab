var path = require('__path');

console.log(__filename);

console.log(__dirname + '/app.js');

 console.log('./form.html');  

 var formpath = path.join(__dirname, 'form.html') 



var http = require('http');
var qs = require('querystring');

var server = http.createServer( handleRequest);

function handleRequest(req, res){
        req.method === 'POST' && req.url === '/'
        var store = "";
        req.on('data' , (chunk) => {
            store = store + chunk;
        }).on('end', () => {
            res.statusCode = 201;
            res.end(store);
            var parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));

        })
    }


server.listen(3000, () => {
    console.log('server listening on port 3k');
})
