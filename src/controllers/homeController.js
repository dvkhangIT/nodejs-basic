const connection = require('../config/database');
const getHomePage = (req, res) => {
  return res.render('home.ejs');
};
const getDetailPage = (req, res) => {
  res.render('sample.ejs');
};
const postCreateUser = (req, res) => {
  console.log(req.body);
  res.send('create new user');
};
module.exports = { getHomePage, getDetailPage, postCreateUser };
