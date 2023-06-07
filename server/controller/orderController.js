const pool = require("../db");
const crypto = require("crypto");

exports.getAllOrders = async (req, res) => {
  try {
    res.send("Get All Orders");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.getUserOrders = async (req, res) => {
  try {
    res.send("Get User Orders");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.placeOrder = async (req, res) => {
  try {
    res.send("Order Confirm");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.updateStatus = async (req, res) => {
  try {
    res.send("Order Status Updated");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    res.send("Order Status Updated");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
