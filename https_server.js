// Importing modules
const https = require("https");
const fs = require("fs");

// Declare Constants
const port = 80;
const hostname = "localhost";
const options = {
	key:fs.readFileSync("key.pem"),
	cert:fs.readFileSync("cert.pem")
}

// Create a server
const server = https.createServer(options, function(req, res){
    // Send the response when request is made
	res.end("HTTPS server is working !");
});

// Start the server
server.listen(port, hostname, function(){
	console.log(`Server running on port ${port}`);
});
