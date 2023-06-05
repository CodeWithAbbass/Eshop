const pool = require("../db");
const jwt = require("jsonwebtoken");
const statusCode = require("../utils/status_code");
const { serverResponse } = require("../utils/status_code");
const { STATUS_VARIABLES } = require("../utils/status_code");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

exports.adminSignup = async (req, res) => {
  try {
    let { email, phone, full_name, password } = req.body;

    if (!email || !phone || !full_name || !password) {
      return serverResponse(res, STATUS_VARIABLES.INVALID_ARGUMENTS);
    }

    const allAdmins = await pool.query("SELECT * FROM admin WHERE phone = $1", [
      phone,
    ]);

    if (allAdmins.rowCount > 0) {
      return serverResponse(res, STATUS_VARIABLES.NUMBER_EXIST);
    }

    const userId =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(36) +
      crypto.randomBytes(5).toString("hex");
    console.log(userId);
    // Here We Hashing
    const salt = await bcrypt.genSalt(8);
    const SecPass = await bcrypt.hash(req.body.password, salt);

    const createAdmin = await pool.query(
      `INSERT INTO admin (email, phone, full_name, password, uid ) VALUES ($1, $2, $3, $4, $5)`,
      [email, phone, full_name, SecPass, userId]
    );

    if (createAdmin.rowCount == 0) {
      return serverResponse(res, STATUS_VARIABLES.UNSPECIFIED_ERROR);
    }

    const data = {
      phone,
      password,
    };

    return serverResponse(
      res,
      STATUS_VARIABLES.SUCCESSFUL_REQUEST,
      "Signup Successfully",
      data
    );
  } catch (error) {
    console.log(error);
    return serverResponse(res, STATUS_VARIABLES.EXCEPTION_ERROR, error.message);
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const adminExist = await pool.query(
      `SELECT * FROM admin WHERE phone = '${phone}'`
    );
    if (adminExist.rowCount < 1) {
      return res.status(404).send("Not Found");
    }
    const admin = adminExist.rows[0];
    const verifyPass = await bcrypt.compare(password, admin.password);
    if (!verifyPass) {
      return res.status(400).send("Password Not Matched");
    }

    const authToken = jwt.sign(
      { uid: admin.uid },
      process.env.JWT_SECRET_PRIVATE,
      { expiresIn: "7d", algorithm: "RS256" }
    );
    res.cookie("authtoken", authToken, {
      httpOnly: true, // For Localhost
      secure: true, //it is applicable when we use https method
    });

    // const VerifyToken = jwt.verify(authToken, process.env.JWT_SECRET_PUBLIC);

    res.status(200).send({ authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
