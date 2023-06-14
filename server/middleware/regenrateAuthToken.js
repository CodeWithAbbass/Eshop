const jwt = require("jsonwebtoken");
const pool = require("../db");
const { serverResponse, STATUS_VARIABLES } = require("../utils/status_code");

exports.regenrateAuthToken = async (req, res, next) => {
  try {
    const token = req.headers.authtoken;
    // console.log("token ===============", token);

    if (!token) {
      return serverResponse(res, STATUS_VARIABLES.INVALID_TOKEN);
    }
    const data = jwt.verify(token, process.env.JWT_SECRET_PRIVATE);

    const user = await pool.query(
      `SELECT * FROM users WHERE uid = $1 AND role = $2`,
      [data.uid, "user"]
    );

    if (user.rowCount == 0) {
      throw new Error("User not found");
    }
    const authtoken = jwt.sign(
      { uid: data.uid },
      process.env.JWT_SECRET_PRIVATE,
      { expiresIn: "7d", algorithm: "RS256" }
    );

    req.token = authtoken;
    req.user = user.rows[0];

    next();
  } catch (error) {
    return serverResponse(res, STATUS_VARIABLES.TOKEN_EXPIRED, error.message);
  }
};
