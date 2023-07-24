const pool = require("../db");
const crypto = require("crypto");

exports.getAllCat = async (req, res) => {
  try {
    let success = false;
    const allAddresses = await pool.query(
      "SELECT * FROM address WHERE uid = $1",
      [req.user.uid]
    );
    if (allAddresses.rows == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Address Book is Empty Yet!" });
    }
    success = true;
    res.send({
      success,
      data: allAddresses.rows,
      message: "Address Book Found Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
