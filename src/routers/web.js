const express = require('express');
const {
  getHomePage,
  getDetailPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  getUpdateUser,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/detail', getDetailPage);
router.get('/create', getCreatePage);
router.get('/update', getUpdatePage);
router.get('/update/:id', getUpdatePage);
router.post('/create-user', postCreateUser);
router.post('/update-user', getUpdateUser);

module.exports = router;
