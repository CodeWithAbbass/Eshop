const pool = require("../db");
const path = require("path");
const fs = require("fs");
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
      iterator.saleschedule = JSON.parse(iterator.saleschedule);
      iterator.attributes = JSON.parse(iterator.attributes);
      iterator.description = JSON.parse(iterator.description);
      iterator.category = JSON.parse(iterator.category);
      iterator.tags = JSON.parse(iterator.tags);
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
    let success = false;
    const singleProduct = await pool.query(
      `SELECT * FROM products WHERE uid = $1`,
      [req.params.id]
    );
    if (singleProduct.rowCount == 0) {
      return res.status(404).send({ success, message: "Product Not Found" });
    }

    for (const iterator of singleProduct.rows) {
      iterator.images = JSON.parse(iterator.images);
      iterator.saleschedule = JSON.parse(iterator.saleschedule);
      iterator.attributes = JSON.parse(iterator.attributes);
      iterator.description = JSON.parse(iterator.description);
      iterator.category = JSON.parse(iterator.category);
      iterator.tags = JSON.parse(iterator.tags);
    }

    success = true;
    res.send({
      success,
      data: singleProduct.rows[0],
      message: "Product Founded Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.addProduct = async (req, res) => {
  try {
    let success = false;
    let {
      title,
      sku,
      rating,
      price,
      discount,
      brand,
      saleprice,
      saleschedule,
      stockmanagement,
      maxquantity,
      allowbackorder,
      stock,
      stockstatus,
      attributes,
      category,
      smalldesc,
      tags,
      description,
      images,
    } = req.body;
    if (req.files) {
      let path = [];
      req.files.forEach(function (files, index, arr) {
        path.push("http://localhost:5000/" + files.filename);
      });
      images = [...path];
    }

    const uid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(5) +
      crypto.randomBytes(5).toString("hex");
    images = JSON.stringify(images);

    const addProduct = await pool.query(
      `INSERT INTO products (
      uid, 
      rating,
      price,
      discount,
      stock,
      saleprice,
      maxquantity,
      title,
      sku,
      brand,
      saleschedule,
      stockmanagement,
      allowbackorder,
      stockstatus,
      attributes,
      category,
      smalldesc,
      description,
      tags,
      images) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *`,
      [
        uid,
        parseFloat(rating),
        parseFloat(price),
        parseFloat(discount),
        parseFloat(stock),
        parseFloat(saleprice),
        parseFloat(maxquantity),
        title,
        sku,
        brand,
        saleschedule,
        stockmanagement,
        allowbackorder,
        stockstatus,
        attributes,
        category,
        smalldesc,
        description,
        tags,
        images,
      ]
    );
    if (addProduct.rowCount == 0) {
      return res
        .status(500)
        .send({ success, message: "Internal Server Error" });
    }

    const OriginalImageArr = JSON.parse(addProduct.rows[0].images);
    const OriginalSaleScheduleArr = JSON.parse(addProduct.rows[0].saleschedule);
    const OriginalAttributsArr = JSON.parse(addProduct.rows[0].attributes);
    const OriginalCategoryArr = JSON.parse(addProduct.rows[0].category);
    const OriginalDescriptionArr = JSON.parse(addProduct.rows[0].description);
    const OriginalTagsArr = JSON.parse(addProduct.rows[0].tags);
    let NewProduct = addProduct.rows[0];
    NewProduct.images = OriginalImageArr;
    NewProduct.saleschedule = OriginalSaleScheduleArr;
    NewProduct.attributes = OriginalAttributsArr;
    NewProduct.category = OriginalCategoryArr;
    NewProduct.description = OriginalDescriptionArr;
    NewProduct.tags = OriginalTagsArr;
    success = true;

    res.send({
      success,
      data: NewProduct,
      message: "Product Added Successfully",
    });
  } catch (error) {
    console.error(error.message, "catch");
    res.status(500).send("Internal Server Error");
  }
};
exports.editProduct = async (req, res) => {
  try {
    let success = false;
    let {
      uid,
      title,
      sku,
      price,
      discount,
      brand,
      saleprice,
      saleschedule,
      stockmanagement,
      maxquantity,
      allowbackorder,
      stock,
      stockstatus,
      attributes,
      category,
      smalldesc,
      tags,
      description,
      deletedimages,
      images,
    } = req.body;
    const productExist = await pool.query(
      `SELECT * FROM products WHERE uid = $1`,
      [uid]
    );
    if (productExist.rowCount == 0) {
      return res
        .status(404)
        .send({ success, data: [], message: "Product Not Found" });
    }
    if (typeof images == "string") {
      images = [images];
    }
    if (req.files) {
      req.files.forEach(function (file, index, arr) {
        images.push("http://localhost:5000/" + file.filename);
      });
    }

    deletedimages = JSON.parse(deletedimages);
    deletedimages.forEach((filename) => {
      const ImageName = filename.split("http://localhost:5000/");
      const filePath = path.join(__dirname, "../", "/uploads/") + ImageName[1];

      // Use fs.unlink to delete the file
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return res
            .status(404)
            .send({ success, message: "Error deleting image file" });
        }

        console.log("File deleted successfully:", ImageName[1]);
      });
    });
    images = JSON.stringify(images);
    const updateProduct = await pool.query(
      `
    UPDATE products
    SET price = $2,
        discount = $3,
        stock = $4,
        saleprice = $5,
        maxquantity = $6,
        title = $7,
        sku = $8,
        brand = $9,
        saleschedule = $10,
        stockmanagement = $11,
        allowbackorder = $12,
        stockstatus = $13,
        attributes = $14,
        category = $15,
        smalldesc = $16,
        description = $17,
        tags = $18,
        images = $19
    WHERE uid = $1
    RETURNING *;
    `,
      [
        uid,
        parseFloat(price),
        parseFloat(discount),
        parseFloat(stock),
        parseFloat(saleprice),
        parseFloat(maxquantity),
        title,
        sku,
        brand,
        saleschedule,
        stockmanagement,
        allowbackorder,
        stockstatus,
        attributes,
        category,
        smalldesc,
        description,
        tags,
        images,
      ]
    );
    if (updateProduct.rowCount == 0) {
      return res.status(404).send("Product Not Updated");
    }

    for (const iterator of updateProduct.rows) {
      iterator.images = JSON.parse(iterator.images);
      iterator.saleschedule = JSON.parse(iterator.saleschedule);
      iterator.attributes = JSON.parse(iterator.attributes);
      iterator.description = JSON.parse(iterator.description);
      iterator.category = JSON.parse(iterator.category);
      iterator.tags = JSON.parse(iterator.tags);
    }

    success = true;
    res.send({
      success,
      data: updateProduct.rows[0],
      message: "Product Updated Successfully",
    });
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
