const express = require("express");
const imgtoBase64 = require("image-to-base64");
const router = express.Router();
const Card = require('./render');

router.route("/").get(nameReply).post(nameReply);

function nameReply(req, res) {
  res.set("Content-Type", "image/svg+xml");
  const method = req.method;
  const imgType = method === "GET" ? req.query.type : req.body.type;
  const typeColor = method === "GET" ? req.query.color : req.query.color;
  const typeValue = method === "GET" ? req.query.text : req.body.text;
  const typeIcon = method === "GET" ? req.query.icon : req.body.icon;
  const typeAnimation = method === "GET" ? req.query.animate : req.query.animate;
  var outputImage = new Card({
    typeImg: imgType,
    typeColor: typeColor,
    typeValue: typeValue,
    typeIcon: typeIcon,
    typeAnimation: typeAnimation,
  })
  res.send(outputImage.render());
}

module.exports = router;