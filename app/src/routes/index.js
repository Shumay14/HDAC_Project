"use stirct";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// API

router.get("/", ctrl.home);
router.get("/login", ctrl.login);
router.get("/register", ctrl.register);
router.get("/nftcard", ctrl.nftcard);

module.exports = router;
