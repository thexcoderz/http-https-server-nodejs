const http = require("http");  // import http module

// Declare constants
const port = 8080;
const hostname = "localhost";

// Create a server
const server = http.createServer(function(req,res){
    // Send the response when request is made
	res.end("HTTP server is working !");
});

// Start the server
server.listen(port, hostname, function(){
	console.log(`Server running on port ${port}`);
});
