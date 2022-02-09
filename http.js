const http = require("http");

const server = http.createServer((req, res) => {
  //req -- represents the incoming request
  //res -- response from the server
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("Here is our about page");
  } else {
    res.end(`<h1>Oops!</h1>
<p>Unable to find page</p>
<a href="/">Go home</a>`);
  }
});

server.listen(5000);
