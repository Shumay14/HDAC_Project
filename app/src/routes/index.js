"use stirct";

const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
    storage: "uploads/"
});

const multiImg = upload.fields([{ name: 'background', maxCount: 1 }, { name: 'profiles', maxCount: 3 }]);

const ctrl = require("./home.ctrl");

// API

router.get("/", ctrl.home);
router.get("/login", ctrl.login);
router.get("/register", ctrl.register);
router.get("/nftcard", ctrl.nftcard);

router.post("/multi", multiImg, crtl.uploadMultiImages);

module.exports = router;
