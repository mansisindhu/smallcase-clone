const express = require('express');
const User = require("../models/user.model");

const router = express.Router();

router.get("", async (req, res) => {
    const users = await User.find().lean().exec();
    res.render('url', {
        users
    });
})

//get smallData with User
router.get("/:id/smallcase_data", async (req, res) => {
    const user = await User.find({ post: req.params.id }).lean().exec();
    const smallCase = await smallCase.findById(req.params.id).lean().exec();
    return res.status(201).send({ user, smallCase });
})

module.exports = router;