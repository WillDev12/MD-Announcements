const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const api = require("./api");

app.get("/", (req, res, next) => {
  res.redirect("https://github.com/NekoDevSS/MD-Announcements/tree/main");
});

app.use("/api", api);

app.listen(PORT, () => {
  console.log("listening on 8080");
});

module.exports = app;
