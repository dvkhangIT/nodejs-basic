const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  //   console.log(`getHomePage ~ results:`, results);
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
  //   console.log(`postCreateUser ~ results:`, results);
  //   const [results, fields] = await connection.query('SELECT * FROM Users');
  //   console.log(`postCreateUser ~ results:`, results);
};
const getCreatePage = (req, res) => {
  res.render('create.ejs');
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let [results, fields] = await connection.query('select * from Users where id = ?', [
    userId,
  ]);
  // console.log(`getUpdatePage ~ results:`, results);
  let user = results && results.length > 0 ? results[0] : {};
  res.render('edit.ejs', { userEdit: user });
};
module.exports = {
  getHomePage,
  getDetailPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
