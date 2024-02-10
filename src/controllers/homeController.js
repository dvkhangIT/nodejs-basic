const getHomePage = (req, res) => {
  res.send("Hello World and Nodemon");
};
const getDetailPage = (req, res) => {
  res.render("sample.ejs");
};
module.exports = { getHomePage, getDetailPage };
