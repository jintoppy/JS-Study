var http = require('http');
console.log('test');

function handler(req, res){
	if(req.method == 'GET'){
		
		if(req.url == '/'){
		res.writeHead(200, {
			"Content-type": "text/plain"
		});
		res.write("Hello world: " + Math.random());
	}
	else{
		res.writeHead(403);
	}	
	}
	else
	{
		res.writeHead(403);
	}
		
	res.end();
}
var http_server = http.createServer(handler);

http_server.listen(8006, "localhost");