function handleHTTP(req,res) {
	if (req.method == "GET") {
		if (req.url == "/") {
			res.writeHead(200,{ "Content-type": "text/plain" });

			ASQ(function(done){
				setTimeout(function(){
					done(Math.random());
				},100);
			})
			.then(function(_,msg){
				res.end("Hello World: " + msg);
			});
		}
		else if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
			req.addListener("end",function(){
				req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
				static_files.serve(req,res);
			});
			req.resume();
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

	ASQ = require("asynquence"),
	node_static = require("node-static"),
	static_files = new node_static.Server(__dirname),
	io = require("socket.io").listen(httpserv)
;

httpserv.listen(port, host);
