const fs = require("fs");

// Function to handle any incoming requests
function handleRequest(req, res) {
  const { url } = req;

  // Route the request based on the URL path
  switch (url) {
    case "/":
      servePage("home.html", res);
      break;
    case "/about":
      servePage("about.html", res);
      break;
    case "/contact":
      servePage("contact.html", res);
      break;
    case "/products":
      servePage("products.html", res);
      break;
    case "/subscribe":
      servePage("subscribe.html", res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Route not found");
  }
}

// Function to serve a specific HTML page
function servePage(pageName, res) {
  // Read the HTML file from the "views" directory
  fs.readFile(`./views/${pageName}`, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      // Send the HTML content as the response
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// Export the handleRequest function to be used by other modules
module.exports = {
  handleRequest,
};
