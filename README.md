
# HTTP and HTTPS server in NodeJS

This short guide shows an example of how to create a simple HTTP and HTTPS server using NodeJS. All source codes are available in this repository.

***

## [HTTP Server]()
### Code
```javascript
const http = require("http");  // import http module

// Declare constants
const port = 80;
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
```
### Working
```bash
$ node http_server.js
Output : Server running on port 80
// Server started. Let's check it.
$ curl http://localhost:80
Output : HTTP server is working !
```
***
## [HTTPS Server]()
##### To create an HTTPS server we will need a ssl certificate. To generate it I will be using openssl. Use the following commands to generate it.
```bash
$ openssl genrsa -out key.pem
$ openssl req -new -key key.pem -out csr.pem
$ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
// We will have the following files in the working directory: cert.pem, key.pem, csr.pem
// We don't need csr.pem, So remove it.
$ rm csr.pem
```
##### We have generated the certificate (cert.pem) and key (key.pem) . Let's code.
### Code
```javascript
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
```
### Working
```bash
$ node https_server.js
Output : Server running on port 80
// Server started. Let's check it.
$ curl http://localhost:80
Output : HTTPS server is working !
```
***
#### This was only for reference. You can read the full guide from the official [Documentation](https://nodejs.org/api/index.html).
