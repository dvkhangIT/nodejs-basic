const express = require('express');
const {
  getHomePage,
  getDetailPage,
  postCreateUser,
  getCreatePage,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/detail', getDetailPage);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

module.exports = router;
