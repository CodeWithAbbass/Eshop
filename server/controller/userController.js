const pool = require("../db");
const { serverResponse } = require("../utils/status_code");
const { STATUS_VARIABLES } = require("../utils/status_code");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.get = async (req, res) => {
  try {
    let success = false;
    success = true;
    res.send({
      success,
      message: "User Found Successfully",
      user: req.user,
      authtoken: req.token,
    });
  } catch (error) {
    console.log(error.message);
    return serverResponse(res, STATUS_VARIABLES.EXCEPTION_ERROR, error.message);
  }
};

exports.signup = async (req, res) => {
  try {
    let success = false;
    let { name, email, phone, password, role } = req.body;
    if (role.toLowerCase() != "admin") {
      role = "user";
    }
    if (!password) {
      return res.status(400).send({
        message: "Please Fill The Password Fields",
        success,
      });
    }
    if (password.length < 8) {
      return res.status(400).send({
        message: "The password must be at least 8 characters.",
        success,
      });
    }

    const allUsers = await pool.query(
      "SELECT * FROM users WHERE phone = $1 OR email = $2",
      [phone, email]
    );

    if (allUsers.rowCount > 0) {
      return res.status(400).send({
        message: "User Already Exist! Check Your Email And Phone Again.",
        success,
      });
    }
    const uid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(5) +
      crypto.randomBytes(5).toString("hex");

    // Here We Hashing
    const salt = await bcrypt.genSalt(8);
    const SecPass = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO users (uid, name, email, phone, password, role ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [uid, name, email.toLowerCase(), phone, SecPass, role.toLowerCase()]
    );
    const data = newUser.rows[0];
    res.send({
      success: true,
      data: data,
      message: "Account Created Successfully",
    });
  } catch (error) {
    return serverResponse(res, STATUS_VARIABLES.EXCEPTION_ERROR, error.message);
  }
};

exports.login = async (req, res) => {
  try {
    let success = false;
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status.send({
        success,
        message: "Please Fill The Form.",
      });
    }
    if (phone.length < 11) {
      return res.status(400).send({
        success,
        message: "The phone must be at least 11 characters.",
      });
    }
    const userExist = await pool.query(
      `SELECT * FROM users WHERE phone = '${phone}'`
    );
    if (userExist.rowCount == 0) {
      return res.status(404).send({ success, message: "User Not Found" });
    }
    const user = userExist.rows[0];
    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      return res
        .status(400)
        .send({ success, message: "Try Again With Correct Credentials" });
    }

    const authtoken = jwt.sign(
      { uid: user.uid },
      process.env.JWT_SECRET_PRIVATE,
      { expiresIn: "5d", algorithm: "RS256" }
    );

    success = true;
    res.send({
      success,
      user,
      authtoken,
      message: `${user.name} Login Successfully`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    let success = false;
    let { name, avatar, role } = req.body;

    if (role.toLowerCase() == "admin") {
      role = "admin";
    } else {
      role = "user";
    }
    if (!name) {
      return res.status(400).send({
        success,
        message: "Please Fill The Mandatory Fields",
      });
    }
    const userUpdate = await pool.query(
      `UPDATE users 
      SET name = $2,
      avatar = $3,
      role = $4
      WHERE uid = $1
      RETURNING *`,
      [req.user.uid, name, avatar, role]
    );
    success = true;
    res.send({
      success,
      data: userUpdate.rows[0],
      message: `${name}'s Profile Updated Successfully`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
