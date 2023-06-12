const jwt = require("jsonwebtoken");
const pool = require("../db");
const { serverResponse, STATUS_VARIABLES } = require("../utils/status_code");

exports.fetchUser = async (req, res, next) => {
  const webToken = req.cookies.authtoken; // From Web App
  const mobileToken = req.headers.authtoken; //  From Mobile App

  if (!webToken && !mobileToken) {
    return serverResponse(res, STATUS_VARIABLES.INVALID_TOKEN);
  }
  try {
    const data = jwt.verify(
      webToken ? webToken : mobileToken,
      process.env.JWT_SECRET_PRIVATE
    );
    const user = await pool.query(
      `SELECT * FROM users WHERE uid = $1 AND role = $2`,
      [data.uid, "user"]
    );
    if (user.rowCount == 0) {
      throw new Error("User not found");
    }
    req.token = webToken ? webToken : mobileToken;
    req.user = user.rows[0];

    next();
  } catch (error) {
    return serverResponse(res, STATUS_VARIABLES.TOKEN_EXPIRED, error.message);
  }
};
