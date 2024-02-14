const connection = require('../config/database');
const getHomePage = (req, res) => {
  return res.render('home.ejs');
};
const getDetailPage = (req, res) => {
  res.render('sample.ejs');
};
const postCreateUser = (req, res) => {
  // INSERT INTO Users values(1,'khang.dev@gmail.com','dvkhang','Can Tho');
  console.log(req.body);
  let { name, email, city } = req.body;
  connection.query(
    `INSERT INTO Users (email,name,city)  values(?,?,?)`,
    [email, name, city],
    function (err, results) {
      console.log(err);
      res.send('created user succeed');
    }
  );
};
module.exports = { getHomePage, getDetailPage, postCreateUser };
