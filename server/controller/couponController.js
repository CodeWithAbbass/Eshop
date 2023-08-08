const pool = require("../db");
const crypto = require("crypto");

exports.getAllCoupon = async (req, res) => {
  try {
    let success = false;
    const AllCoupons = await pool.query("SELECT * FROM coupon");
    for (const iterator of AllCoupons.rows) {
      iterator.include = JSON.parse(iterator.include);
      iterator.exclude = JSON.parse(iterator.exclude);
    }
    success = true;
    res.send({
      success,
      data: AllCoupons.rows,
      message: "Coupon Found Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
exports.addCoupon = async (req, res) => {
  try {
    let success = false;
    let {
      coupon_code,
      description,
      discount_type,
      coupon_amount,
      coupon_expiry,
      free_shipping,
      minimum_spend,
      maximum_spend,
      individual_use_only,
      exclude_sale_item,
      limit_per_coupon,
      limit_per_user,
      include,
      exclude,
    } = req.body;
    if (!coupon_code || !coupon_amount || !coupon_expiry) {
      return res
        .status(401)
        .send({ success, message: "Please Fill the Mandatory Fields" });
    }
    include = JSON.stringify(include);
    exclude = JSON.stringify(exclude);
    const cid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(5) +
      crypto.randomBytes(5).toString("hex");
    const AddCoupon = await pool.query(
      `INSERT INTO coupon (
        cid, 
        coupon_code, 
        description, 
        discount_type, 
        coupon_amount, 
        coupon_expiry, 
        free_shipping, 
        minimum_spend, 
        maximum_spend, 
        individual_use_only, 
        exclude_sale_item, 
        limit_per_coupon, 
        limit_per_user, 
        include,
        exclude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
      [
        cid,
        coupon_code,
        description,
        discount_type,
        parseFloat(coupon_amount),
        coupon_expiry,
        free_shipping,
        parseFloat(minimum_spend),
        parseFloat(maximum_spend),
        individual_use_only,
        exclude_sale_item,
        parseInt(limit_per_coupon),
        parseInt(limit_per_user),
        include,
        exclude,
      ]
    );
    if (AddCoupon.rowCount == 0) {
      return res
        .status(500)
        .send({ success, data: [], message: "Internal Server Error" });
    }
    const AllCoupons = await pool.query("SELECT * FROM coupon");
    success = true;
    res.send({
      success,
      data: AllCoupons.rows,
      message: "Coupon Added Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
