const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
