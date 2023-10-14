// Import the required modules
const http = require("http");
const fs = require("fs");

// Create an HTTP server using the 'createServer' method
const server = http.createServer((request, response) => {
  // Read the contents of the 'index.html' file
  fs.readFile("./index.html", "utf8", (err, data) => {
    if (err) {
      // If an error occurs while reading the file, log the error and send a 500 response
      console.error("Error reading file:", err);
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Internal Server Error");
    } else {
      // If the file is read successfully, send the file contents as the response
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    }
  });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
