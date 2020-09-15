
const express = require("express");

const vegetable = require("../controller/grocery/vegetable");
const fruit = require("../controller/grocery/fruit");
const personalcare = require('../controller/grocery/personalcare');
const grocery = require('../controller/grocery/grocery');
const housecare = require('../controller/grocery/housecare');
const provision = require('../controller/grocery/provision');
const packedfood = require('../controller//grocery/packedfood')
const snack = require('../controller//grocery/snack')
const beverage = require('../controller//grocery/beverage')
const babycare = require('../controller//grocery/babycare')


const router = express.Router();


router.get("/vegetable", vegetable);
router.get("/fruit", fruit);
router.get("/personalcare", personalcare);
router.get("/grocery", grocery)
router.get("/housecare", housecare)
router.get("/provision", provision)
router.get("/packedfood", packedfood)
router.get("/snack", snack)
router.get("/beverage", beverage)
router.get('/babycare', babycare)


module.exports = router;

