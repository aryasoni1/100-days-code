const express = require("express");
const app = express();
const PORT = 3030;

//Add and test middleware that logs every incoming request.
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}]${req.method} ${req.url}`);
  next();
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

//

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
