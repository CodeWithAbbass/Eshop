const jwt = require("jsonwebtoken");
const pool = require("../db");
const { serverResponse, STATUS_VARIABLES } = require("../utils/status_code");

exports.fetchAdmin = async (req, res, next) => {
  const token = req.headers.authtoken;

  if (!token) {
    return serverResponse(res, STATUS_VARIABLES.INVALID_TOKEN);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_PUBLIC);
    const user = await pool.query(
      `SELECT * FROM admin WHERE id = '${data.id}'`
    );
    if (user.rowCount == 0) {
      throw new Error("Admin not found");
    }
    req.token = token;
    req.user = user.rows[0];
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "Please Authenticate using a Valid Token" });
  }
};

// module.exports = fetchAdmin;
