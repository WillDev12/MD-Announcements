const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.redirect('https://github.com/WillDev12/MD-Announcements');
});

app.get("/api", (req, res) => {
  res.set("Content-Type", "image/svg+xml");
  const method = req.method;
  const imgType = method === "GET" ? req.query.type : req.body.type;
  const theme = method === "GET" ? req.query.theme : req.body.theme;
  const background =
    method === "GET" ? req.query.background : req.body.background;
  const text = method === "GET" ? req.query.text : req.body.text;
  var outputImage = new Card({
    imgType: imgType,
    theme: theme,
    text: text,
    background: background,
  });
  res.send(outputImage.render());
});

app.listen(PORT, () => {
  console.log("listening on 8080");
});

class Card {
  constructor({ imgType, theme, text, background }) {
    this.imgType = imgType;
    this.theme = theme;
    this.textVal = text;
    this.background = background;
  }
  render() {
    var outputImg = ``;

    if (this.theme == null || this.theme == undefined || this.theme == "") {
      this.theme = "dark";
    }

    outputImg += `<svg xmlns="http://www.w3.org/2000/svg" `;

    if ((this.imgType == "horizontal")) {
      outputImg += `width="100%">`;
    } else {
      outputImg += `width="250" height="250">`;
    }
    outputImg += `<style>div {font: 18px serif;width: 90%; overflow: hidden;padding: 1rem;border-radius: 0.8rem;border: solid 1px;margin: auto;}div {font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}`;

    if (this.theme == "light") {
      if ((this.background === "true")) {
        outputImg += `.color {background-color: #FFFFFF; color: #0969DA; border-color: #D8DEE4;}`;
      } else {
        outputImg += `.color {background: none; color: #0969DA; border-color: #D8DEE4;}`;
      }
    } else if (this.theme == "dark") {
      if ((this.background === "true")) {
        outputImg += `.color {background-color: #0D1117; border-color: #21262D; color: #58A6FF;}`;
      } else {
        outputImg += `.color {background: none; border-color: #21262D; color: #58A6FF;}`;
      }
    } else if (this.theme == "red") {
      if ((this.background === "true")) {
        outputImg += `.color {background-color: #181319; border-color: #2E181E; color: #EF4444;}`;
      } else {
        outputImg += `.color {background: none; border-color: #2E181E; color: #EF4444;}`;
      }
    } else if (this.theme == "blue") {
      if ((this.background === "true")) {
        outputImg += `.color {background-color: #121D2F; border-color: #345D96; color: #E6EDF3;}`;
      } else {
        outputImg += `.color {background: none; border-color: #345D96; color: #E6EDF3;}`;
      }
    } else if (this.theme == "teal") {
      if ((this.background === "true")) {
        outputImg += `.color {background-color: #1F2D30; border-color: #365451; color: #6CACA0;}`;
      } else {
        outputImg += `.color {background: none; border-color: #365451; color: #6CACA0;}`;
      }
    } else if (this.theme == "yellow") {
      if ((this.background === "true")) {
        outputImg += `.color {background-color: #262115; border-color: #634711; color: #CE9621;}`;
      } else {
        outputImg += `.color {background: none; border-color: #634711; color: #CE9621;}`;
      }
    } else if (this.theme == "green") {
      if ((this.background === "true")) {
        outputImg += `.color {background-color: #182C25; border-color: #306844; color: #41D274;}`;
      } else {
        outputImg += `.color {background: none; border-color: #306844; color: #41D274;}`;
      }
    }

    outputImg += `.vertical {height: 180px; vertical-align: middle; display: table-cell; text-align: center;}</style>`;

    if ((this.imgType == "horizontal")) {
      outputImg += `<foreignObject y="20" width="100%" height="160"><div xmlns="http://www.w3.org/1999/xhtml" class="color">`;
    } else if ((this.imgType == "vertical")) {
      outputImg += `<foreignObject y="20" width="100%" height="250"><div xmlns="http://www.w3.org/1999/xhtml" class="color vertical">`;
    }

    outputImg += this.textVal;
    outputImg += `</div></foreignObject></svg>`;

    return outputImg;
  }
}

module.exports = app;
