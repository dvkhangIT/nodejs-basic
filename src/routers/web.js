const express = require("express");
const { getHomePage, getDetailPage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/detail", getDetailPage);
module.exports = router;
