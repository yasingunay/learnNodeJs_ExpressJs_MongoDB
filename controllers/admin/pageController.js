exports.getHomePage = (req, res) => {
    res.status(200).render("admin/index",{
        pageName: "Dashboard"
    })
}


exports.getAboutPage = (req, res) => {
    res.status(200).render("admin/about",{
        pageName: "About"
    })
}

exports.getCertificatesPage = (req, res) => {
    res.status(200).render("admin/certificates",{
        pageName: "Certificates"
    })
}


exports.getProjectsPage = (req, res) => {
    res.status(200).render("admin/projects",{
        pageName: "Projects"
    })
}


exports.getResumePage = (req, res) => {
    res.status(200).render("admin/resume",{
        pageName: "Resume"
    })
}


exports.getSocialMediaPage = (req, res) => {
    res.status(200).render("admin/socialMedia",{
        pageName: "socialMedia"
    })
}
