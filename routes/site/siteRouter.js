const express = require("express"); // import express

const siteController = require("../../controllers/site/siteController"); // import pageController

const router = express.Router(); // create a new router object

router.route("/").get(siteController.getHomePage); // configure the getHomePage route


module.exports = router; // export the router object