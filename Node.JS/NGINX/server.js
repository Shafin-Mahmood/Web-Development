// Import the built-in HTTP module to create a web server
const http = require("http");

// Import the File System module to read files from disk
const fs = require("fs");

// Import the Path module to safely handle file paths
const path = require("path");

// Define the port number where the server will run
const port = 3000;

// Create the HTTP server
// This callback runs every time a request comes to the server
const server = http.createServer((req, res) => {

  // Build the file path based on the request URL
  // If the user requests "/", serve "index.html"
  // Otherwise, serve the requested file (css, js, image, etc.)
  const filePath = path.join(
    __dirname,                       // current directory of this file
    req.url === "/" ? "index.html" : req.url
  );

  // Log the requested file path (for debugging)
  console.log(filePath);

  // Extract the file extension (e.g., .html, .css, .js)
  const extName = String(path.extname(filePath)).toLowerCase();

  // Define MIME types to tell the browser how to handle files
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".json": "application/json"
  };

  // Get the correct Content-Type based on file extension
  // If extension is unknown, use a default binary type
  const contentType = mimeTypes[extName] || "application/octet-stream";

  // Read the requested file from the file system
  fs.readFile(filePath, (err, content) => {

    // If an error occurs while reading the file
    if (err) {

      // If the file does not exist
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File Not Found");
      } 
      // For any other server error
      else {
        res.writeHead(500);
        res.end("500: Internal Server Error");
      }

    } 
    // If the file is read successfully
    else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
