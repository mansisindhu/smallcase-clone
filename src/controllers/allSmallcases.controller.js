const express = require("express");
const SmallCase = require("../models/smallcase.model.js");

const router = express.Router();

router.get("/", async function (req, res) {
    const smallcaseData = await SmallCase.find({}).lean().exec();
    const isUserLoggedIn = !!req.cookies.userId;
    res.render("allSmallcases", {
        data : smallcaseData,
        isUserLoggedIn
    });
});

module.exports = router;