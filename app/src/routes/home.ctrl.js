"use strict";

const home = (req, res) => {
  res.render("index");
};

const login = (req, res) => {
  res.render("login");
};

const register = (req, res) => {
  res.render("register");
};

const nftcard = (req, res) => {
  res.render("nftcard");
};

module.exports = {
  home,
  login,
  register,
  nftcard,
};
