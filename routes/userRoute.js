//routes to user authentication controllers

const express = require("express");

const user = require("../controller/user/signin");

const savedLocation = require('../controller/user/savedLocation')

const router = express.Router();


router.post("/phonenumber/signin", user.phonenumberSignin);

router.post("/phonenumber/verify", user.phonenumberVerify);


router.post("/saveAddress", savedLocation.create);
router.get("/saveAddress/read", savedLocation.read);
router.post("/saveAddress/delete", savedLocation.delete);



module.exports = router;

