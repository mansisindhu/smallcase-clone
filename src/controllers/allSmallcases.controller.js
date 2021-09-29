const express = require("express");
const SmallCase = require("../models/smallcase.model.js");

const router = express.Router();

router.get("/", async function (req, res) {
    const smallcaseData = await SmallCase.find({}).lean().exec();
    res.render("allSmallcases", {
        data : smallcaseData
    });
});

module.exports = router;