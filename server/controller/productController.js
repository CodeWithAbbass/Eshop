const pool = require("../db");

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
      `SELECT * FROM products WHERE id = $1`,
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
// Login Required
exports.addProduct = async (req, res) => {
  try {
    const {
      title,
      rating,
      price,
      discount,
      stock,
      issale,
      issold,
      images,
      description,
    } = req.body;
    const addProduct = await pool.query(
      `INSERT INTO products (title, rating, price, discount, stock, issale, issold, images, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        title,
        rating,
        price,
        discount,
        stock,
        issale,
        issold,
        images,
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
// Login Required
exports.updateProduct = async (req, res) => {
  try {
    const {
      title,
      rating,
      price,
      discount,
      stock,
      issale,
      issold,
      images,
      description,
    } = req.body;
    const productExist = await pool.query(
      `SELECT * FROM products WHERE id = ${req.params.id}`
    );
    if (productExist.rowCount == 0) {
      return res.status(404).send("Product Not Found");
    }
    const updateProduct = await pool.query(
      `
    UPDATE products 
    SET title = $2, rating = $3, price = $4, discount = $5, stock = $6, issale = $7, issold = $8, images = $9, description = $10
    WHERE id = $1
    RETURNING *;
    `,
      [
        req.params.id,
        title,
        rating,
        price,
        discount,
        stock,
        issale,
        issold,
        images,
        description,
      ]
    );
    if (updateProduct.rowCount == 0) {
      return res.status(404).send("Product Not Updated");
    }
    const UpdatedProduct = updateProduct.rows[0];

    res.send({ "Updated Successfully": UpdatedProduct });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
// Login Required
exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await pool.query(
      `DELETE FROM products
    WHERE id = ${req.params.id}
    RETURNING *;`
    );

    if (deleteProduct.rowCount == 0) {
      return res.status(404).send("Product Not Found");
    }
    const DeletedProduct = deleteProduct.rows[0];
    res.send({ "Product Deleted Successfully": DeletedProduct });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
