const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.getHome);
router.get("/portafolio", pageController.getPortfolio);
router.get("/portafolio/:category", pageController.getPortfolioCategory);
router.get("/sobre-mi", pageController.getAbout);
router.post("/contact", pageController.postContact);

module.exports = router;