const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  console.log(`getHomePage ~ results:`, results);
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
module.exports = { getHomePage, getDetailPage, postCreateUser, getCreatePage };
