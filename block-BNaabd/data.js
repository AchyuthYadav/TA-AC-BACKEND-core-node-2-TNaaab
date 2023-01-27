var http = require('http');
var qs = require('querystring');

var server = http.createServer( handleRequest);

function handleRequest(req, res){
    var dataFormat = req.header['content-type'];
    var store = "";
    req.on('data' , (chunk) => {
        store = store + chunk;
    });

    req.on('end', () => {
        // console.log(store , dataFormat)
        if(dataFormat === "application/json"){
            var parsedData = JSON.parse(store);
            res.end(store); 
        }

        if(dataFormat === "application/x-www-form-urlencoded"){
            var parsedData =  qs.parse(store);
            res.end(JSON.stringify (parsedData));
        }
    })
}

server.listen(7000, () => {
    console.log('server listening on port 7k');
})