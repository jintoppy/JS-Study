function handleHTTP(req,res) {
	if (req.method == "GET") {
		if (req.url == "/") {
			res.writeHead(200,{ "Content-type": "text/plain" });

			ASQ(function(done){
				setTimeout(function(){
					done(Math.random());
				},5000);
			})
			.then(function(_,msg){
				res.end("Hello World: " + msg);
			});
		}
		else {
			res.writeHead(403);
			res.end();
		}
	}
	else {
		res.writeHead(403);
		res.end();
	}
}


var
	http = require("http"),
	httpserv = http.createServer(handleHTTP),

	port = 8006,
	host = "localhost",

	ASQ = require("asynquence")
;

httpserv.listen(port, host);
