
const express = require("express");

const vegetable = require("./controller/vegetable");

const router = express.Router();


router.get("/vegetable", vegetable);



module.exports = router;

