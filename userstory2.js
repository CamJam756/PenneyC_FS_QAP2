const http = require("http");
const request = require("request");

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/daily-info") {
    // Fetch daily information using an NPM package (e.g., "daily-info-package")
    request("https://api.example.com/daily-info", (error, response, body) => {
      if (!error && response.statusCode === 200) {
        // Display the information in the response
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(body);
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Failed to fetch daily information");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
