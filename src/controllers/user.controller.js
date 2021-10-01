const express = require('express');
const User = require("../models/user.model");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const regx = /^([a-zA-Z0-9\.-]+)\@([a-zA-Z0-9\-]+)\.([a-z]{2,20})$/;
    if (!regx.test(req.body.email)) {
        res.status(400).send({message: "Invaild email address", error: true});
        return;
    }
    const usersData = await User.find({email: req.body.email}).lean().exec();
    if (usersData.length) {
        res.status(409).send({message: "User already exists", error: true});
        return;
    } else {
        const user = await User.create(req.body);
        res.status(201).send(user);
    }
})

router.post("/login", async (req, res) => {
    const userData = await User.find({email: req.body.email}).lean().exec();
    if (userData.length) {
        if (userData[0].password === req.body.password) {
            res.cookie("userId", userData[0]._id.toString(), {httpOnly: true});
            res.status(200).send({});
        } else {
            res.status(403).send({message: "Wrong password", error: true})
        }
    } else {
        res.status(403).send({message: "Login failed", error: true});
    }
})

module.exports = router;