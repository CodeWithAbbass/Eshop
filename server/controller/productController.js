const pool = require('../db')


exports.allProduct = async (req, res) => {
  try {
    const allProduct = await pool.query("SELECT * FROM products")

    if (allProduct.rows == 0) {
      return res.status(404).send("Product Not Found");
    }

    res.status(200).send(allProduct.rows)
  } catch (error) {
    console.log(error)
    res.status(401).send("got error")
  }
}
exports.singleProduct = async (req, res) => {
  try {
    const singleProduct = await pool.query(`SELECT * FROM products WHERE id = $1`, [req.params.id])
    if (singleProduct.rowCount == 0) {
      return res.status(404).send("Product Not Found");
    }
    res.status(200).send(singleProduct.rows)
  } catch (error) {
    console.log(error)
    res.status(401).send("got error")
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const { title, description, images, rating, price, colors, ispopular } = req.body;

    const updateProduct = await pool.query(`
    UPDATE products 
    SET title = $2,
    description = $3,
    images = $4,
    rating = $5,
    price = $6,
    colors = $7,
    ispopular = $8
    WHERE id = $1
    RETURNING *;
    `, [req.params.id, title, description, images, rating, price, colors, ispopular])
    if (updateProduct.rowCount == 0) {
      return res.status(404).send("Product Not Updated");
    }
    res.status(200).send(updateProduct.rows)
  } catch (error) {
    console.log(error)
    res.status(401).send("got error")
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await pool.query(
    `DELETE FROM products
    WHERE id = $1
    RETURNING *;`, [req.params.id])

    if (deleteProduct.rowCount == 0) {
      return res.status(404).send("Product Not Deleted");
    }
    res.status(200).send(deleteProduct.rows)
  } catch (error) {
    console.log(error)
    res.status(401).send("got error")
  }
}


exports.addProduct = async (req, res) => {
  try {
    const userToken = req.token;
    if (!userToken) {
      return res.status(400).send("Please Authenticate using a Valid Token");
    }
    var { title, description, images, rating, price, colors, ispopular } = req.body
    const addProduct = await pool.query(`INSERT INTO products (title,description,images,rating,price,colors,ispopular) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      data = [title, description, images, rating, price, colors, ispopular])
    if (addProduct.rowCount == 0) {
      return res.status(401).send("database dumping error")
    }
    res.status(200).send(req.body)
  } catch (error) {
    console.log(error)
    res.status(401).send("got error")
  }
}

