const express = require("express");
const app = express();
const PORT = 3030;
const path = require("path");
//Serve static HTML and CSS using express.static().
app.use(express.static(path.join(__dirname, "public")));
//Add and test middleware that logs every incoming request.
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}]${req.method} ${req.url}`);
  next();
});

//Create a custom middleware that appends a timestamp to each request.
app.use((req, res, next) => {
  req.timestamp = new Date().toISOString();
  console.log(`${req.timestamp} ${req.method} ${req.url}`);
  next(); // Pass control to next middleware or route handler
});

//Use express.json() and express.urlencoded() for body parsing.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/json", (req, res) => {
  console.log(req.body);
  res.json({ message: "recived json data", data: req.body });
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.json({ message: "recived form data", data: req.body });
});

//Create a basic Express server that listens on port 3000.
app.get("/", (req, res) => {
  res.send("hello frm express");
});

//Define a route /hello that returns Hello World.
app.get("/hello", (req, res) => {
  res.send("hello");
});

//Create a dynamic route /user/:id and log the id param.
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  console.log("UserId:", userId);
  res.send(`user id is ${userId}`);
});

//Parse and respond to query strings in /search?q=term.

app.get("/search", (req, res) => {
  const queryTerm = req.query.q;
  if (queryTerm) {
    res.send(`search for ${queryTerm}`);
  } else {
    res.send("no search term");
  }
});

//Send different HTTP status codes (200, 400, 404, 500) in various routes.

// ✅ 200 OK - Success
app.get("/success", (req, res) => {
  res.status(200).send("Everything is OK!");
});

// ❌ 400 Bad Request - Client sent invalid data
app.get("/bad-request", (req, res) => {
  res.status(400).send("Bad Request: Invalid input!");
});

// ❌ 404 Not Found - Resource doesn't exist
app.get("/not-found", (req, res) => {
  res.status(404).send("404: Resource not found!");
});

// ❌ 500 Internal Server Error - Server-side error
app.get("/server-error", (req, res) => {
  res.status(500).send("500: Internal Server Error!");
});
//Return 404 for all unhandled routes using a catch-all route.
app.use((req, res) => {
  res.status(404).send("404 not found");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
