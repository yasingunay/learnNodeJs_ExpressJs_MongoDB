
const Certificate = require("../../models/Certificate");



exports.getHomePage = async (req, res) => {
  

  const certificates = await Certificate.find();
 

  res.status(200).render("site/index", {
    pageName: "index",
    certificates,
   
  });
};