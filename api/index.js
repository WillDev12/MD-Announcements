const express = require("express");
const api = require("./api");
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res, next) => {
  res.redirect("https://github.com/WillDev12/MD-Announcements");
});

app.use("/api", api);

app.listen(PORT, () => {
  console.log("listening on 8080");
});

module.exports = app;
