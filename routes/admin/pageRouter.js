const express = require("express"); // import express

const pageController = require("../../controllers/admin/pageController"); // import pageController

const router = express.Router(); // create a new router object

router.route("/").get(pageController.getHomePage); // handle GET requests to /admin  //localhost:3000/admin
router.route("/about").get(pageController.getAboutPage); // handle GET requests to /admin/about  //localhost:3000/admin/about
router.route("/certificates").get(pageController.getCertificatesPage); // handle GET requests to /admin/certificates  //localhost:3000/admin/certificates
router.route("/projects").get(pageController.getProjectsPage); // handle GET requests to /admin/projects  //localhost:3000/admin/projects
router.route("/resume").get(pageController.getResumePage); // handle GET requests to /admin/resume  //localhost:3000/admin/resume
router.route("/social-media").get(pageController.getSocialMediaPage); // handle GET requests to /admin/socialMedia  //localhost:3000/admin/socialMedia

module.exports = router; // export the router object