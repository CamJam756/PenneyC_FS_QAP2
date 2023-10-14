const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

// Create an instance for the EventEmitter
const eventEmitter = new EventEmitter();

// Function to handle different routes
function handleRoute(request, response) {
  const { url } = request;

  switch (url) {
    case "/":
      // Reads and serves the home.html file
      fs.readFile("views/index.html", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.end("Error reading file");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;
    case "/about":
      // Reads and serves the about.html file
      fs.readFile("views/about.html", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.end("Error reading file");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;
    case "/contact":
      // Reads and serves the contact.html file
      fs.readFile("views/contact.html", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.end("Error reading file");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;
    case "/products":
      // Reads and serves the products.html file
      fs.readFile("views/products.html", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.end("Error reading file");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;
    case "/subscribe":
      // Reads and serves the subscribe.html file
      fs.readFile("views/subscribe.html", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.end("Error reading file");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Route not found");
  }
}

// Create the HTTP server
const server = http.createServer((request, response) => {
  handleRoute(request, response);

  // Log the route to the console
  console.log(`Route accessed: ${request.url}`);

  // Emit an event for every successful file read
  fs.readFile("views" + request.url, (err) => {
    if (!err) {
      eventEmitter.emit("fileRead", request.url);
    }
  });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Event listener for successful file reads
eventEmitter.on("fileRead", (url) => {
  console.log(`File successfully read: ${url}`);
});
