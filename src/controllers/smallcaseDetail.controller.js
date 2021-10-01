const express = require("express");
const SmallCase = require("../models/smallcase.model.js");

const router = express.Router();

router.get("/:id", async function (req, res) {
    const smallcaseData = await SmallCase.find({"id": req.params.id}).lean().exec();
    const isUserLoggedIn = !!req.cookies.userId;

    res.render("smallcaseDetail", {
        data : smallcaseData,
        isUserLoggedIn
    });
});

module.exports = router;