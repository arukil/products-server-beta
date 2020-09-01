
const express = require("express");

const vegetable = require("./controller/vegetable");

const fruit = require("./controller/fruit");


const router = express.Router();


router.get("/vegetable", vegetable);

router.get("/fruit", fruit);




module.exports = router;

