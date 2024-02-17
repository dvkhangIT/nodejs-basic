const express = require('express');
const {
  getHomePage,
  getDetailPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/detail', getDetailPage);
router.get('/create', getCreatePage);
router.get('/update', getUpdatePage);
router.get('/update/:id', getUpdatePage);
router.post('/create-user', postCreateUser);

module.exports = router;
