const apiHelper = require("../apiHelper/axios");

const getHomePage = async (req, res) => {
    try {
        const resdata = await apiHelper.getHomePageData();
        res.render("home", {
            data: resdata.data
        })
    } catch {
        console.log("getHomePageData show error")
    }
}

const postHomePage = async (req, res) => {
    try {
        const data = req.body;
        const resData = await apiHelper.postData(data);
        res.json(resData);
    } catch {
        console.log("error found");
    }
}

module.exports = {
    getHomePage,
    postHomePage,
}