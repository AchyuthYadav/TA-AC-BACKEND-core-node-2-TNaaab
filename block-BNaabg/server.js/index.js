
var http = require('http');
var qs = require('querystring');
var fs = require('fs');

var server = http.createServer( handleRequest);

function handleRequest(req, res){
    var store = "";
    req.on('data' , (chunk) => {
        store = store + chunk;
        })

        req.on('end', () => {
            if(req.url === '/form' && req.method === 'GET'){
                res.setHeader('conten-Type' , 'text/html', )
            }

            if (req.method === 'POST' && req.url === '/form'){
                var parsedData = qs.parse(store);
                res.setHeader ('conten-Type' , 'text/html' )
                res.end('<h2> ${parsedData.name}</h2> <p> ${parsedData.email}</p>  <p>${parsedData.age}</p>')
            }



        })
    }


server.listen(5678, () => {
    console.log('server listening on port 3k');
})
