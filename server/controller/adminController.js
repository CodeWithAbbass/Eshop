const pool = require("../db");
const { serverResponse } = require("../utils/status_code");
const { STATUS_VARIABLES } = require("../utils/status_code");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    let { email, phone, fullname, address, password, cpassword } = req.body;

    if (!password) {
      return serverResponse(res, STATUS_VARIABLES.INVALID_ARGUMENTS);
    }
    if (password.length < 8) {
      return res
        .status(400)
        .send("The password must be at least 8 characters.");
    }
    if (password != cpassword) {
      return res.status(400).send("The password confirmation does not match.");
    }

    const allUsers = await pool.query(
      "SELECT * FROM admin WHERE phone = $1 OR email = $2",
      [phone, email]
    );
    if (allUsers.rowCount > 0) {
      return res
        .status(400)
        .send(
          "Uhh Ohh! Sorry, User Already Exist! Check Your Email And Phone Again."
        );
    }

    // Here We Hashing
    const salt = await bcrypt.genSalt(8);
    const SecPass = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO admin (fullname, phone, email, password, address) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [fullname, phone, email, SecPass, address]
    );

    res.send(newUser.rows[0]);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      // return res.status(404).send("");
      return serverResponse(res, STATUS_VARIABLES.INVALID_ARGUMENTS);
    }
    if (phone.length < 11) {
      return res.status(400).send("The phone must be at least 11 characters.");
    }
    const adminExist = await pool.query(
      `SELECT * FROM admin WHERE phone = '${phone}'`
    );
    if (adminExist.rowCount < 1) {
      return res.status(404).send("User Not Found");
    }
    const admin = adminExist.rows[0];
    const verifyPass = await bcrypt.compare(password, admin.password);
    if (!verifyPass) {
      return res.status(400).send("Try Again With Correct Credentials");
    }

    const authtoken = jwt.sign(
      { id: admin.id },
      process.env.JWT_SECRET_PRIVATE,
      { expiresIn: "7d", algorithm: "RS256" }
    );
    res.cookie("authtoken", authtoken, {
      httpOnly: true, // For Localhost
      secure: true, //it is applicable when we use https method
    });

    res.status(200).send({ admin, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const { fullname, address } = req.body;
    const adminUpdate = await pool.query(
      `UPDATE admin 
      SET fullname = $2, address = $3
      WHERE id = $1
      RETURNING *`,
      [req.user.id, fullname, address]
    );
    res.send(adminUpdate.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
