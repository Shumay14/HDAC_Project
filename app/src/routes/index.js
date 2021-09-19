"use stirct";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// API

router.get("/", ctrl.home);
router.get("home/login", ctrl.login);
router.get("home/register", ctrl.register);
router.get("home/nftcard", ctrl.nftcard);

module.exports = router;
