const pool = require("../db");
const crypto = require("crypto");

exports.getAllOrders = async (req, res) => {
  try {
    let success = false;
    const allOrders = await pool.query("SELECT * FROM orders");
    if (allOrders.rows == 0) {
      return res
        .status(400)
        .send({ success, data: [], message: "No New Orders Yet!" });
    }
    for (const iterator of allOrders.rows) {
      iterator.products = JSON.parse(iterator.products);
    }
    success = true;
    res.send({
      success,
      data: allOrders.rows,
      message: "All Orders Found Successfully",
    });
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
    success = true;
    res.send({
      success,
      data: userOrder.rows,
      message: "Orders Found Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.getOrderDetails = async (req, res) => {
  try {
    let success = false;
    const orderExist = await pool.query(
      `SELECT * FROM orders WHERE orderid = $1`,
      [req.params.id]
    );
    if (orderExist.rowCount == 0) {
      return res.send({ success, data: [], message: "Order Not Found" });
    }
    const orderDetails = await pool.query(
      `SELECT * FROM orders WHERE userid = $1 AND orderid = $2`,
      [req.user.uid, req.params.id]
    );
    if (orderDetails.rowCount == 0 || orderDetails.rows.length == 0) {
      success = true;
      return res.send({ success, data: [], message: "Order Not Found" });
    }
    for (const iterator of orderDetails.rows) {
      iterator.products = JSON.parse(iterator.products);
    }
    success = true;
    res.send({
      success,
      data: orderDetails.rows,
      message: "Orders Details Found Successfully",
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
      Date.now().toString(5) +
      crypto.randomBytes(5).toString("hex");
    let {
      deliverto,
      phone,
      orderid = uid,
      userid = req.user.uid,
      date,
      products,
      status = req.body.paymentmethod.toLowerCase() == "card"
        ? "processing"
        : "pending",
      paymentmethod,
      shipaddress,
      billaddress,
    } = req.body;
    if (!billaddress) {
      billaddress = shipaddress;
    }
    if (
      !deliverto ||
      !products ||
      !paymentmethod ||
      !shipaddress ||
      !billaddress
    ) {
      return res
        .status(400)
        .send({ success, message: "Please Fill the Mandatory Fields." });
    }
    const StrProducts = JSON.stringify(products);
    date = Date.now().toString();

    const placeOrder = await pool.query(
      `INSERT INTO orders (orderid, userid, date, status, shipaddress, billaddress, paymentmethod, deliverto, phone, products) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        orderid,
        userid,
        date,
        status,
        shipaddress,
        billaddress,
        paymentmethod,
        deliverto,
        phone,
        StrProducts,
      ]
    );
    if (placeOrder.rowCount == 0) {
      return res
        .status(500)
        .send({ success, message: "Order Confirmation Failed" });
    }

    const allOrders = await pool.query(
      `SELECT * FROM orders WHERE userid = $1`,
      [req.user.uid]
    );
    for (const iterator of allOrders.rows) {
      iterator.products = JSON.parse(iterator.products);
    }
    success = true;
    res.send({
      success,
      data: allOrders.rows,
      message: "Order Placed Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.updateStatus = async (req, res) => {
  // Order Status Should Be:
  // pending ||  processing || shipped || delivered || returned || cancelled
  try {
    let success = false;
    let { status } = req.body;
    const orderExist = await pool.query(`SELECT * FROM WHERE orderid = $1`, [
      req.params.id,
    ]);
    if (orderExist.rowCount == 0) {
      return res.send({ success, data: [], message: "Order Not Found" });
    }
    const updateStatus = await pool.query(
      `UPDATE orders SET status = $2 WHERE orderid = $1 RETURNING *`,
      [req.params.id, status.toLowerCase()]
    );
    if (updateStatus.rowCount == 0) {
      return res.send({
        success,
        data: [],
        message: "Order Status Not Updated",
      });
    }
    updateStatus.rows[0].products = JSON.parse(updateStatus.rows[0].products);
    success = true;
    res.send({
      success,
      data: updateStatus.rows,
      message: "Order Status Updated Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.cancelOrder = async (req, res) => {
  try {
    let success = false;
    const orderExist = await pool.query(
      `SELECT * FROM orders WHERE orderid = $1`,
      [req.params.id]
    );
    if (orderExist.rowCount == 0) {
      return res.send({ success, data: [], message: "Order Not Found" });
    }
    const cancelOrder = await pool.query(
      `UPDATE orders SET status = $2 WHERE orderid = $1 RETURNING *`,
      [req.params.id, "cancelled"]
    );
    if (cancelOrder.rowCount == 0) {
      return res.send({
        success,
        data: [],
        message: "Order Was Not Cancelled",
      });
    }
    cancelOrder.rows[0].products = JSON.parse(cancelOrder.rows[0].products);
    success = true;
    res.send({
      success,
      data: cancelOrder.rows,
      message: "Order Cancelled Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    let success = false;
    const orderExist = await pool.query(
      `SELECT * FROM orders WHERE orderid = $1`,
      [req.params.id]
    );
    if (orderExist.rowCount == 0) {
      return res.send({ success, data: [], message: "Order Not Found" });
    }
    const deleteOrder = await pool.query(
      `DELETE FROM orders WHERE orderid = $1`,
      [req.params.id]
    );
    if (deleteOrder.rowCount == 0) {
      return res
        .status(500)
        .send({ success, data: [], message: "Order Deletion Process Failed" });
    }
    success = true;
    res.send({
      success,
      data: deleteOrder.rows,
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
