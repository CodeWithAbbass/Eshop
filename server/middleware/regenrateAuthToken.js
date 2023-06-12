const jwt = require("jsonwebtoken");
const pool = require("../db");
const { serverResponse, STATUS_VARIABLES } = require("../utils/status_code");

exports.regenrateAuthToken = async (req, res, next) => {
  try {
    const webToken = req.cookies.authtoken; // From Web App
    const mobileToken = req.headers.authtoken; //  From Mobile App
    // console.log("webToken ===============", webToken);
    // console.log("mobileToken ===============", mobileToken);
    if (!webToken && !mobileToken) {
      return serverResponse(res, STATUS_VARIABLES.INVALID_TOKEN);
    }
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
    const authtoken = jwt.sign(
      { uid: data.uid },
      process.env.JWT_SECRET_PRIVATE,
      { expiresIn: "7d", algorithm: "RS256" }
    );

    // For Web Version
    res.cookie("authtoken", authtoken, {
      httpOnly: true, // For Localhost
      secure: true, //it is applicable when we use https method
    });

    req.token = authtoken;
    req.user = user.rows[0];

    next();
  } catch (error) {
    return serverResponse(res, STATUS_VARIABLES.TOKEN_EXPIRED, error.message);
  }
};
