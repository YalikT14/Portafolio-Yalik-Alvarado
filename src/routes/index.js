const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.getHome);
router.post("/contact", pageController.postContact);

module.exports = router;