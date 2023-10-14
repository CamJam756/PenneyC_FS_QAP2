const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath;

  // Check the requested URL and set the file path accordingly
  if (req.url === "/") {
    filePath = path.join(__dirname, "views", "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "views", "about.html");
  } else if (req.url === "/products") {
    filePath = path.join(__dirname, "views", "products.html");
  } else if (req.url === "/contacts") {
    filePath = path.join(__dirname, "views", "contacts.html");
  } else if (req.url === "/subscribe") {
    filePath = path.join(__dirname, "views", "subscribe.html");
  } else if (req.url === "/styles.css") {
    // Serve the CSS file for the /styles.css URL
    filePath = path.join(__dirname, "views", "styles.css");
  } else {
    // Handles any unknown route
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
    return;
  }

  console.log("Reading file:", filePath);

  // Reads the file content
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      // Sets the appropriate content type based on the file extension
      if (req.url === "/styles.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
      }
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
