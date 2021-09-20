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

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/nftcard", ctrl.output.nftcard);

router.post("/multi", multiImg, crtl.uploadMultiImages);

module.exports = router;
