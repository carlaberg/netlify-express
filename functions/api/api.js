const express = require("express");
const serverless = require("serverless-http");
const variable = require("./folder/variable");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json(variable);
});

router.get("/bakverk", (req, res) => {
  res.json({ bakverk: "tårta" });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);