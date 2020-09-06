
const express = require("express");

const vegetable = require("./controller/vegetable");

const fruit = require("./controller/fruit");

const personalcare =require('./controller/personalcare');

const grocery =require('./controller/grocery');

const housecare =require('./controller/housecare');

const provision = require('./controller/provision');

const router = express.Router();


router.get("/vegetable", vegetable);

router.get("/fruit", fruit);

router.get("/personalcare", personalcare);

router.get("/grocery", grocery )

router.get("/housecare",housecare)

router.get("/provision", provision)






module.exports = router;

