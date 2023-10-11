exports.getHomePage = (req, res) => {
    res.status(200).render("site/index",{
        pageName: "Index"
    })
}

