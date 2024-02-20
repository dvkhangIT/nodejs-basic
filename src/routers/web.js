const express = require('express');
const {
  getHomePage,
  getDetailPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  getUpdateUser,
  postDeleteUser,
  postHandleRemove,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/detail', getDetailPage);
router.get('/create', getCreatePage);
router.get('/update', getUpdatePage);
router.get('/update/:id', getUpdatePage);
router.post('/create-user', postCreateUser);
router.post('/update-user', getUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemove);

module.exports = router;
