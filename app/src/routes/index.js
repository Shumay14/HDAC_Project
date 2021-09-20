"use stirct";

const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadProfile = multer({
    dest: "uploads/profile",
    //limits: { fileSize: 5 * 256 * 256 }
});

const uploadArt = multer({
    dest: "uploads/art",
    //limits: { fileSize: 5 * 1024 * 1024 }
});

const home_ctrl = require("./home.ctrl");
const art_ctrl = require("./art.ctrl");
const auth_ctrl = require("./auth.ctrl")

// API
// HOME
router.get("/", home_ctrl.output.home);
router.get("/login", home_ctrl.output.login);
router.get("/register", home_ctrl.output.register);

router.post("/login", home_ctrl.process.login);
router.post("/register", [uploadProfile.single('profile_image')], home_ctrl.process.register);

// ART
router.get("/showArt", art_ctrl.output.showArt);
router.get("/registerArt", art_ctrl.output.registerArt);

router.post("/registerArt", [auth_ctrl.verifyToken, uploadProfile.single('art_image')], art_ctrl.process.registerArt);

module.exports = router;
