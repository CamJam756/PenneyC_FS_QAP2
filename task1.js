// Import the 'http' module to create an HTTP server
const http = require("http");

// Create an HTTP server using the 'createServer' method
const server = http.createServer((request, response) => {
  const { url } = request;

  switch (url) {
    // Handle the "/about" route
    case "/about":
      console.log("About Page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("About Page");
      break;

    // Handle the "/contact" route
    case "/contact":
      console.log("Contact Page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Contact Page");
      break;

    // Handle other routes
    default:
      console.log("Home Page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Home Page");
      break;
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
