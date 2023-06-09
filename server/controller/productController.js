const pool = require("../db");
const crypto = require("crypto");

exports.allProduct = async (req, res) => {
  try {
    let success = false;
    const allProduct = await pool.query("SELECT * FROM products");

    if (allProduct.rows == 0) {
      return res.status(404).send({ success, message: "Products Not Found" });
    }
    for (const iterator of allProduct.rows) {
      iterator.images = JSON.parse(iterator.images);
    }
    success = true;
    res
      .status(200)
      .send({ success, message: "All Product Found", data: allProduct.rows });
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
    singleProduct.rows[0].images = JSON.parse(singleProduct.rows[0].images);
    res.send(singleProduct.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.addProduct = async (req, res) => {
  try {
    // let {
    //   title,
    //   rating,
    //   price,
    //   discount,
    //   stock,
    //   images,
    //   brand,
    //   issale,
    //   category,
    //   description,
    // } = req.body;
    // const uid =
    //   crypto.randomBytes(5).toString("hex") +
    //   Date.now().toString(36) +
    //   crypto.randomBytes(5).toString("hex");
    // images = JSON.stringify(images);
    // const addProduct = await pool.query(
    //   `INSERT INTO products (uid, title, rating, price, discount, stock, images, brand, issale, category, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
    //   [
    //     uid,
    //     title,
    //     parseFloat(rating),
    //     parseFloat(price),
    //     parseFloat(discount),
    //     parseFloat(stock),
    //     images,
    //     brand,
    //     issale,
    //     category,
    //     description,
    //   ]
    // );
    // if (addProduct.rowCount == 0) {
    //   return res.status(500).send("Internal Server Error");
    // }
    // res.send(addProduct.rows[0]);
    let image;
    if (req.files) {
      console.log("Ok");
      let path = [];
      req.files.forEach(function (files, index, arr) {
        path.push("http://localhost:5000/" + files.filename);
        console.log(files.filename);
      });
      image = path;
    }
    res.send({ Pass: image });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.updateProduct = async (req, res) => {
  try {
    let {
      title,
      rating,
      price,
      discount,
      stock,
      images,
      brand,
      issale,
      category,
      description,
    } = req.body;

    const productExist = await pool.query(
      `SELECT * FROM products WHERE uid = $1`,
      [req.params.id]
    );
    if (productExist.rowCount == 0) {
      return res.status(404).send("Product Not Found");
    }
    images = JSON.stringify(images);
    const updateProduct = await pool.query(
      `
    UPDATE products 
    SET title = $2, rating = $3, price = $4, discount = $5, stock = $6, images = $7, brand = $8, issale = $9, category = $10, description = $11
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
        category,
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
