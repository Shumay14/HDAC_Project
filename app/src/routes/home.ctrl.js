"use strict";

const Account = require("../models/Account");

const output = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  nftcard: (req, res) => {
    res.render("nftcard");
  },
};


const process = {
  
}

module.exports = {
  home,
  login,
  register,
  nftcard,
};
