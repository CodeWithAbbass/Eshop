const jwt = require("jsonwebtoken");
const pool = require("../db");
const { serverResponse, STATUS_VARIABLES } = require("../utils/status_code");

exports.fetchAdmin = async (req, res, next) => {
  const token = req.headers["authtoken"] && req.headers["authtoken"];
  if (!token) {
    return serverResponse(res, STATUS_VARIABLES.INVALID_TOKEN);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_PUBLIC);
    const user = pool.query(`SELECT * FROM admin WHERE uid = '${data.uid}'`);
    if (user.rowCount == 0) {
      throw new Error("User not found");
    }
    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "Please Authenticate using a Valid Token" });
  }
};

// module.exports = fetchAdmin;
