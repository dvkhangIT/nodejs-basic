const express = require("express");
// const { hostname } = require("os");
const app = express();
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routers/web");
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
configViewEngine(app);
app.use("/", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
// console.log(process.env);
