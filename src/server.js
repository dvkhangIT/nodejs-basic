const express = require('express');
// const { hostname } = require("os");
const app = express();
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routers/web');
const connection = require('./config/database');
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
configViewEngine(app);
app.use('/', webRoutes);
// test connection

connection.query('SELECT * FROM Users', function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
