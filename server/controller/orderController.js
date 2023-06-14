const pool = require("../db");
const crypto = require("crypto");

exports.getAllOrders = async (req, res) => {
  try {
    const allOrders = await pool.query("SELECT * FROM orders");
    if (allOrders.rows == 0) {
      return res.status(404).send("No New Orders Yet!");
    }
    for (const iterator of allOrders.rows) {
      iterator.products = JSON.parse(iterator.products);
    }
    res.status(200).send(allOrders.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.getUserOrders = async (req, res) => {
  try {
    let success = false;
    const userOrder = await pool.query(
      `SELECT * FROM orders WHERE userid = $1`,
      [req.user.uid]
    );
    if (userOrder.rowCount == 0 || userOrder.rows.length == 0) {
      success = true;
      return res.send({ success, data: [], message: "Order Not Found" });
    }
    for (const iterator of userOrder.rows) {
      iterator.products = JSON.parse(iterator.products);
    }
    res.send({
      success,
      data: userOrder.rows,
      message: "Order Found Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.placeOrder = async (req, res) => {
  try {
    let success = false;
    let uid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(36) +
      crypto.randomBytes(5).toString("hex");
    let {
      orderid = uid,
      userid = req.user.uid,
      date,
      products,
      status = "pending",
      paymentmethod,
      shipaddress,
      billaddress,
    } = req.body;
    if (!billaddress) {
      billaddress = shipaddress;
    }
    const StrProducts = JSON.stringify(products);
    date = Date.now().toString();

    const placeOrder = await pool.query(
      `INSERT INTO orders (orderid, userid, date, status, shipaddress, billaddress, paymentmethod, products) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        orderid,
        userid,
        date,
        status,
        shipaddress,
        billaddress,
        paymentmethod,
        StrProducts,
      ]
    );
    if (placeOrder.rowCount == 0) {
      return res
        .status(500)
        .send({ success, message: "Order Confirmation Failed" });
    }

    const newOrder = {
      orderid,
      userid,
      date,
      status,
      shipaddress,
      billaddress,
      paymentmethod,
      products: JSON.parse(placeOrder.rows[0].products),
    };
    success = true;
    res.send({ success, data: newOrder, message: "Order Placed Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.updateStatus = async (req, res) => {
  // Order Status Should Be:
  // pending ||  processing || shipping || delivered || returned || cancelled
  try {
    let { status } = req.body;
    const updateStatus = await pool.query(
      `UPDATE orders SET status = $2 WHERE orderid = $1 RETURNING *`,
      [req.params.id, status.toLowerCase()]
    );
    if (updateStatus.rowCount == 0) {
      return res.status(400).send("Order Not Found");
    }
    updateStatus.rows[0].products = JSON.parse(updateStatus.rows[0].products);
    res.send(updateStatus.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    const orderExist = await pool.query(
      `SELECT * FROM orders WHERE orderid = $1`,
      [req.params.id]
    );
    if (orderExist.rowCount == 0) {
      return res.status(400).send("Order Not Found");
    }
    const deleteOrder = await pool.query(
      `DELETE FROM orders WHERE orderid = $1`,
      [req.params.id]
    );
    if (deleteOrder.rowCount == 0) {
      return res.status(500).send("Order Deletion Process Failed");
    }
    res.send("Order Deleted Successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
