//routes to user authentication controllers

const express = require("express");

const user = require("../controller/user/signin");

const router = express.Router();


router.post("/phonenumber/signin", user.phonenumberSignin);

router.post("/phonenumber/verify", user.phonenumberVerify);


module.exports = router;

