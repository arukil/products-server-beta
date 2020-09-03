
const express = require("express");

const vegetable = require("./controller/vegetable");

const fruit = require("./controller/fruit");

const personalcare =require('./controller/personalcare')

const router = express.Router();


router.get("/vegetable", vegetable);

router.get("/fruit", fruit);

router.get("/personalcare", personalcare);





module.exports = router;

