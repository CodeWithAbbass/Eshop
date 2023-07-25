const pool = require("../db");
const crypto = require("crypto");

exports.getAllCat = async (req, res) => {
  try {
    let success = false;
    const AllCat = await pool.query("SELECT * FROM category");
    if (AllCat.rowCount == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "Category is Empty Yet!" });
    }
    success = true;
    res.send({
      success,
      data: AllCat.rows,
      message: "All Categories Found Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.addCategory = async (req, res) => {
  try {
    let success = false;
    let { name, description, count } = req.body;
    if (!name) {
      return res.status(400).send({
        success,
        message: "Please Fill the Mandatory Fields",
      });
    }
    if (!count) {
      count = 0;
    }
    const cid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(5) +
      crypto.randomBytes(5).toString("hex");
    const addCategory = await pool.query(
      `INSERT INTO category (cid, name, description, count) VALUES ($1, $2, $3, $4) RETURNING *`,
      [cid, name, description, count]
    );
    if (addCategory.rowCount == 0) {
      return res
        .status(500)
        .send({ success, message: "Internal Server Error" });
    }
    const allCat = await pool.query("SELECT * FROM category");

    success = true;
    res.send({
      success,
      data: allCat.rows,
      message: "Category Added Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.editCategory = async (req, res) => {
  try {
    let success = false;
    const { cid, name, description } = req.body;
    if (!name) {
      return res.status(400).send({
        success,
        message: "Please Fill the Mandatory Fields",
      });
    }

    const editCat = await pool.query(
      `UPDATE category SET name = $2, description = $3 WHERE cid = $1 RETURNING *`,
      [cid, name, description]
    );
    if (editCat.rowCount == 0) {
      return res
        .status(500)
        .send({ success, message: "Internal Server Error" });
    }
    const allCat = await pool.query("SELECT * FROM category");

    success = true;
    res.send({
      success,
      data: allCat.rows,
      message: "Category Updated Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    // Check Category Exist Or Not.
    const categoryExist = await pool.query(
      `SELECT * FROM category WHERE cid = $1`,
      [req.params.id]
    );
    if (categoryExist.rowCount == 0) {
      return res.status(404).send({ success, message: "Category Not Found" });
    }

    // Deleting Category.
    const deleteCat = await pool.query(
      `DELETE FROM category WHERE cid = $1 RETURNING *;`,
      [req.params.id]
    );

    // Check Category Deleting Process is Completed.
    if (deleteCat.rowCount == 0) {
      return res
        .status(404)
        .send({ success, message: "Category Deletion Process Failed" });
    }
    success = true;
    const AllCat = await pool.query("SELECT * FROM category");
    if (AllCat.rowCount == 0) {
      return res.send({
        success,
        data: [],
        message: "Category Deleted Successfully!",
      });
    }

    res.send({
      success,
      data: AllCat.rows,
      message: "Category Deleted Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
