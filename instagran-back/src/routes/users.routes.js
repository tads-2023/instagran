const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const jwt = require('jsonwebtoken');



userRouter.post("/sign-up", upload.single("avatar"), async (req, res) => {
    let avatar = `http://localhost:3000/${req.file.path}`;

    const {
        name,
        username,
        email,
        password
    } = req.body;
    const user = await User.create({
        name, 
        username, 
        email, 
        password,
        avatar
    });
    let token = jwt.sign({
        id: user._id,
        email: user.email
    }, "ToPSecRET123");

    res.send({token: token});
});

module.exports = userRouter;