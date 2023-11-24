const jwt = require("jsonwebtoken");
const pool = require("../db");
const { serverResponse, STATUS_VARIABLES } = require("../utils/status_code");

exports.fetchUser = async (req, res, next) => {
  const token = req.headers.authtoken;
  // console.log("token ===============", token);

  if (!token) {
    return serverResponse(res, STATUS_VARIABLES.INVALID_TOKEN);
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_PRIVATE);
    const user = await pool.query(
      `SELECT * FROM users WHERE uid = $1 AND role = $2`,
      [data.uid, "user"]
    );
    if (user.rowCount == 0) {
      throw new Error("User not found");
    }
    req.token = token;
    req.user = user.rows[0];

    next();
  } catch (error) {
    // return serverResponse(res, STATUS_VARIABLES.TOKEN_EXPIRED, error.message);
    // res.status(400).send({ success: false, data: [], message: error.message });
    res
      .status(401)
      .send({ success: false, data: [], message: "Please Login Again" });
  }
};
