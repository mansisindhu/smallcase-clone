const express = require("express");
const SmallCase = require("../models/smallcase.model.js");

const router = express.Router();

router.post("", async function (req, res) {
    const smallData = await SmallCase.create(req.body);
    console.log(smallData);
    res.send(smallData);
});

router.get("", async function (req, res) {
    const smallData = await SmallCase.find({}).lean().exec();
    console.log(smallData.length);
    res.render("index", {
        smallData,
    });
});

module.exports = router;
