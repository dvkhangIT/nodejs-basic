const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render('home.ejs', { listUser: results });
};
const getDetailPage = (req, res) => {
  res.render('sample.ejs');
};
const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) values(?,?,?)`,
    [email, name, city]
  );
  res.send('created user succeed');
};
const getCreatePage = (req, res) => {
  res.render('create.ejs');
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render('edit.ejs', { userEdit: user });
};
const getUpdateUser = async (req, res) => {
  const { email, name, city, userId } = req.body;
  await updateUserById(email, name, city, userId);
  // res.send('updated user succeed');
  res.redirect('/');
};

module.exports = {
  getHomePage,
  getDetailPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  getUpdateUser,
};
