//routes to user authentication controllers

const express = require("express");

const user = require("../controller/user/signin");

const savedLocation = require('../controller/user/savedLocation')

const router = express.Router();


router.post("/phonenumber/signin", user.phonenumberSignin);

router.post("/phonenumber/verify", user.phonenumberVerify);

const auth = require('../middleware/tokenVerify');

router.post("/saveAddress",auth, savedLocation.create);
router.get("/saveAddress/read",auth, savedLocation.read);
router.post("/saveAddress/delete",auth, savedLocation.delete);



module.exports = router;

