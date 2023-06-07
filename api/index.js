const express = require("express");
const api = require("./api");
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res, next) => {
  res.send('hello world!');
});

app.use("/api", api);

app.listen(PORT, () => {
  console.log("listening on 8080");
});

module.exports = app;
