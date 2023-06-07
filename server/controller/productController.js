const pool = require("../db");
const crypto = require("crypto");

exports.allProduct = async (req, res) => {
  try {
    const allProduct = await pool.query("SELECT * FROM products");

    if (allProduct.rows == 0) {
      return res.status(404).send("Product Not Found");
    }

    res.status(200).send(allProduct.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.singleProduct = async (req, res) => {
  try {
    const singleProduct = await pool.query(
      `SELECT * FROM products WHERE uid = $1`,
      [req.params.id]
    );
    if (singleProduct.rowCount == 0) {
      return res.status(404).send("Product Not Found");
    }
    res.send(singleProduct.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.addProduct = async (req, res) => {
  try {
    const {
      title,
      rating,
      price,
      discount,
      stock,
      images,
      brand,
      issale,
      description,
    } = req.body;
    const uid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(36) +
      crypto.randomBytes(5).toString("hex");
    const addProduct = await pool.query(
      `INSERT INTO products (uid, title, rating, price, discount, stock, images, brand, issale, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        uid,
        title,
        rating,
        price,
        discount,
        stock,
        images,
        brand,
        issale,
        description,
      ]
    );
    if (addProduct.rowCount == 0) {
      return res.status(500).send("Internal Server Error");
    }
    res.send(addProduct.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const {
      title,
      rating,
      price,
      discount,
      stock,
      images,
      brand,
      issale,
      description,
    } = req.body;
    // if (
    //   !title ||
    //   !rating ||
    //   !price ||
    //   !discount ||
    //   !stock ||
    //   !images ||
    //   !brand ||
    //   !issale ||
    //   !description
    // ) {
    //   return res.status(400).send("Please Fill The Product Mandotory Fields");
    // }
    const productExist = await pool.query(
      `SELECT * FROM products WHERE uid = $1`,
      [req.params.id]
    );
    if (productExist.rowCount == 0) {
      return res.status(404).send("Product Not Found");
    }

    const updateProduct = await pool.query(
      `
    UPDATE products 
    SET title = $2, rating = $3, price = $4, discount = $5, stock = $6, images = $7, brand = $8, issale = $9, description = $10
    WHERE uid = $1
    RETURNING *;
    `,
      [
        req.params.id,
        title,
        rating,
        price,
        discount,
        stock,
        images,
        brand,
        issale,
        description,
      ]
    );
    if (updateProduct.rowCount == 0) {
      return res.status(404).send("Product Not Updated");
    }
    const UpdatedProduct = updateProduct.rows[0];

    res.send(UpdatedProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await pool.query(
      `DELETE FROM products
    WHERE uid = $1
    RETURNING *;`,
      [req.params.id]
    );

    if (deleteProduct.rowCount == 0) {
      return res.status(404).send("Product Not Found");
    }
    const DeletedProduct = deleteProduct.rows[0];
    res.send(DeletedProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
