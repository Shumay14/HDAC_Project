"use strict";

// set module
const express = require("express");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();

// set routes
const home = require("./src/routes/home");

// app setting ===
app.set("views", "./src/views");
// handlebars for template as html
app.set("view engine", "hbs");

const publicDirectory = path.join(__dirname, "./src/public");
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// Define Routes or Controller = middle ware
app.use("/", home);

module.exports = app;
