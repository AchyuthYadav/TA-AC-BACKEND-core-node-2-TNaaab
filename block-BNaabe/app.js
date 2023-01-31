var http = require('http');
var qs = require('querystring');

var server = http.createServer( handleRequest);

function handleRequest(req, res){
    
        var store = "";

        console.log(req.header);

        req.on('data' , (chunk) => {
            store = store + chunk;
        })
        
        req.on('end', () => {
            if (req.header ['content-type'] === 'application/x-www-form-urlencoded'){
                var formData = qs.parse(store);
                res.setHeader ('conten-Type' , 'text/html')
                res.end('<h2> ${jsonData.name}</h2><p> ${jsonData.email}</p>')
            }

            if(req.header ['content-type'] === "application/json"){
                var jsonData = qs.parse(store);
                res.setHeader ('conten-Type' , 'text/html')
                res.end('<h2> ${jsonData.name}</h2><p> ${jsonData.email}</p>')
           }

        })
    }


server.listen(4000, () => {
    console.log('server listening on port 4k');
})