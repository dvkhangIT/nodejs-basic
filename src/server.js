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
// config req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
configViewEngine(app);
app.use('/', webRoutes);

// test connection
connection.query('SELECT * FROM Users', function (err, results, fields) {
  //   console.log(results);
  //   console.log(fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
