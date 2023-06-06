const pool = require("../db");
const { serverResponse } = require("../utils/status_code");
const { STATUS_VARIABLES } = require("../utils/status_code");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.addToWishlist = (req, res) => {
  try {
    res.send({ AddToWishList: req.params.id });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.RemoveFromWishlist = (req, res) => {
  try {
    res.send({ RemoveFromWishlist: req.params.id });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
