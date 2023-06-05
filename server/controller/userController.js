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
      "SELECT * FROM users WHERE phone = $1 OR email = $2",
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
      `INSERT INTO users (fullname, phone, email, password, address) VALUES ($1, $2, $3, $4, $5)`,
      [fullname, phone, email, SecPass, address]
    );

    res.send({ "Signup Successfully": newUser });
  } catch (error) {
    return serverResponse(res, STATUS_VARIABLES.EXCEPTION_ERROR, error.message);
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
    const userExist = await pool.query(
      `SELECT * FROM users WHERE phone = '${phone}'`
    );
    if (userExist.rowCount < 1) {
      return res.status(404).send("User Not Found");
    }
    const user = userExist.rows[0];
    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      return res.status(400).send("Try Again With Correct Credentials");
    }

    const authtoken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET_PRIVATE,
      { expiresIn: "7d", algorithm: "RS256" }
    );
    res.cookie("authtoken", authtoken, {
      httpOnly: true, // For Localhost
      secure: true, //it is applicable when we use https method
    });

    res.status(200).send({ authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const { fullname, email, phone, address } = req.body;

    const userUpdate = await pool.query(
      `
      UPDATE users
      SET
      fullname = $1,
      email = $2,
      phone = $3,
      address = $4
      WHERE id = '${req.user.id}'
      RETURNING *`,
      [fullname, email, phone, address]
    );
    res.send(userUpdate.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
