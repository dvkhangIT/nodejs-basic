const express = require("express");
// const { hostname } = require("os");
const app = express();
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/detail", (req, res) => {
  res.render("sample.ejs");
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
// console.log(process.env);
