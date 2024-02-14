const express = require('express');
const {
  getHomePage,
  getDetailPage,
  postCreateUser,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/detail', getDetailPage);
router.post('/create-user', postCreateUser);
module.exports = router;
