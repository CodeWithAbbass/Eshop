const pool = require("../db");
const crypto = require("crypto");

exports.getAllAddresses = async (req, res) => {
  try {
    let success = false;
    const allAddresses = await pool.query(
      "SELECT * FROM address WHERE uid = $1",
      [req.user.uid]
    );
    if (allAddresses.rows == 0) {
      return res.send({
        success,
        data: [],
        message: "Address Book is Empty Yet!",
      });
    }
    success = true;
    res.send({
      success,
      data: allAddresses.rows,
      message: "Address Book Found Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.addAddress = async (req, res) => {
  try {
    let success = false;

    let { name, phone, email, address } = req.body;
    if (!name || !phone || !address) {
      return res
        .status(400)
        .send({ success, data: [], message: "Please Fill Mandatory Fields." });
    }
    const UserAddressBook = await pool.query(
      `SELECT * FROM address WHERE uid = $1`,
      [req.user.uid]
    );
    if (UserAddressBook.rowCount >= 4) {
      return res.status(400).send({
        success,
        data: UserAddressBook.rows,
        message: "Address Book Has Reached It's Limit",
      });
    }
    let aid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(5) +
      crypto.randomBytes(5).toString("hex");
    const newAddress = await pool.query(
      `INSERT INTO address (aid, uid, name, phone, email, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [aid, req.user.uid, name, phone, email, address]
    );
    if (newAddress.rowCount == 0) {
      success = false;
      return res
        .status(500)
        .send({ success, message: "Address Was Not Added" });
    }
    const allAddresses = await pool.query(
      `SELECT * FROM address WHERE uid = $1`,
      [req.user.uid]
    );
    success = true;
    res.send({
      success,
      data: allAddresses.rows,
      message: "Address Added Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.dShippingAddress = async (req, res) => {
  try {
    let success = false;
    const addressExist = await pool.query(
      `SELECT * FROM address WHERE aid = $1`,
      [req.params.id]
    );
    if (addressExist.rowCount == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Address Not Found" });
    }
    // Default Reset Address Book
    const resetAddressBook = await pool.query(
      `UPDATE address SET shippingaddress = $2 WHERE uid = $1 RETURNING *`,
      [req.user.uid, false]
    );
    if (resetAddressBook.rowCount == 0) {
      return res
        .status(400)
        .send({ success, message: "Address Was Not Changed!" });
    }
    const updatedAddressBook = await pool.query(
      `UPDATE address SET shippingaddress = $3 WHERE uid = $1 AND aid = $2 RETURNING *`,
      [req.user.uid, req.params.id, true]
    );
    if (updatedAddressBook.rowCount == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Address Not Found" });
    }
    const allAddresses = await pool.query(
      `SELECT * FROM address WHERE uid = $1`,
      [req.user.uid]
    );
    success = true;
    res.send({
      success,
      data: allAddresses.rows,
      message: "Default Shipping Address Updated Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.dBillingAddress = async (req, res) => {
  try {
    let success = false;
    const addressExist = await pool.query(
      `SELECT * FROM address WHERE aid = $1`,
      [req.params.id]
    );
    if (addressExist.rowCount == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Address Not Found" });
    }
    // Default Reset Address Book
    const resetAddressBook = await pool.query(
      `UPDATE address SET billingaddress = $2 WHERE uid = $1 RETURNING *`,
      [req.user.uid, false]
    );
    if (resetAddressBook.rowCount == 0) {
      return res
        .status(400)
        .send({ success, message: "Address Was Not Changed!" });
    }
    const updatedAddressBook = await pool.query(
      `UPDATE address SET billingaddress = $3 WHERE uid = $1 AND aid = $2 RETURNING *`,
      [req.user.uid, req.params.id, true]
    );
    if (updatedAddressBook.rowCount == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Address Not Found" });
    }
    const allAddresses = await pool.query(
      `SELECT * FROM address WHERE uid = $1`,
      [req.user.uid]
    );
    success = true;
    res.send({
      success,
      data: allAddresses.rows,
      message: "Default Billing Address Updated Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.updateAddress = async (req, res) => {
  try {
    let success = false;
    let { name, phone, address, email } = req.body;
    if (!name || !phone || !email || !address) {
      return res
        .status(400)
        .send({ success, data: [], message: "Please Fill Mandatory Fields." });
    }
    const addressExist = await pool.query(
      `SELECT * FROM address WHERE aid = $1`,
      [req.params.id]
    );
    if (addressExist.rowCount == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Address Not Found" });
    }
    const newAddress = await pool.query(
      `UPDATE address SET name = $3, phone = $4, email = $5, address = $6 WHERE aid = $1 AND uid = $2`,
      [req.params.id, req.user.uid, name, phone, email, address]
    );
    if (newAddress.rowCount == 0) {
      success = false;
      return res
        .status(500)
        .send({ success, message: "Address Was Not Update" });
    }
    const allAddresses = await pool.query(
      `SELECT * FROM address WHERE uid = $1`,
      [req.user.uid]
    );
    success = true;
    res.send({
      success,
      data: allAddresses.rows,
      message: "Address Updated Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteAddress = async (req, res) => {
  try {
    let success = false;
    const addressExist = await pool.query(
      `SELECT * FROM address WHERE aid = $1`,
      [req.params.id]
    );
    if (addressExist.rowCount == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Address Not Found" });
    }
    const deleteAddress = await pool.query(
      `DELETE FROM address WHERE aid = $1 RETURNING *`,
      [req.params.id]
    );
    if (deleteAddress.rowCount == 0) {
      return res.status(500).send({
        success,
        data: [],
        message: "Address Deletion Process Failed",
      });
    }
    const allAddresses = await pool.query(
      `SELECT * FROM address WHERE uid = $1`,
      [req.user.uid]
    );
    success = true;
    res.send({
      success,
      data: allAddresses.rows,
      message: "Address Deleted Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
