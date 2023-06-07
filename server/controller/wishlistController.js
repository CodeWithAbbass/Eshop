const pool = require("../db");
const { serverResponse } = require("../utils/status_code");
const { STATUS_VARIABLES } = require("../utils/status_code");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.getWishlist = async (req, res) => {
  try {
    const UserWishList = [];
    const user = await pool.query(`SELECT * FROM wishlist WHERE userid = $1`, [
      req.user.uid,
    ]);
    if (user.rowCount == 0) {
      return res.status(400).send("Wishlist is Empty!");
    }

    const WishItemsArr = JSON.parse(user.rows[0].wishitem);
    for (const iterator of WishItemsArr) {
      const ProductFound = await pool.query(
        "SELECT * FROM products WHERE uid = $1",
        [iterator]
      );
      if (ProductFound.rowCount > 0) {
        UserWishList.push(ProductFound.rows[0]);
      }
    }

    res.send(UserWishList);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    const uid =
      crypto.randomBytes(5).toString("hex") +
      Date.now().toString(36) +
      crypto.randomBytes(5).toString("hex");

    const ProductExist = await pool.query(
      `SELECT * FROM products WHERE uid = $1`,
      [req.params.id]
    );
    if (ProductExist.rowCount == 0) {
      return res.status(400).send("Product Not Found!");
    }
    const userWishlistExist = await pool.query(
      `SELECT * FROM wishlist WHERE userid = $1`,
      [req.user.uid]
    );

    // If UserWishList Already Exist.
    if (userWishlistExist.rowCount > 0) {
      const PrevWishlist = userWishlistExist.rows[0].wishitem; // Getting Wishitems
      const PrevWishItems = JSON.parse(PrevWishlist); // Convert To Original State
      for (const iterator of PrevWishItems) {
        if (iterator == req.params.id) {
          return res.send("Product Already Exist In Your Wishlist");
        }
      }

      PrevWishItems.push(req.params.id);

      const StrNewWishlist = JSON.stringify(PrevWishItems);
      const AddItem = await pool.query(
        `UPDATE wishlist SET wishitem = $1 RETURNING *`,
        [StrNewWishlist]
      );
      return res.send(PrevWishItems);
    }

    const wishitem = [req.params.id]; // Product ID
    const StrWishlist = JSON.stringify(wishitem);
    const AddToWishList = await pool.query(
      `INSERT INTO wishlist (uid, userid, wishitem) VALUES ($1, $2, $3) RETURNING *`,
      [uid, req.user.uid, StrWishlist]
    );
    res.send("Item Added To Wishlist Successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteFromWishlist = async (req, res) => {
  try {
    const user = await pool.query(`SELECT * FROM wishlist WHERE userid = $1`, [
      req.user.uid,
    ]);
    if (user.rowCount == 0) {
      return res.status(400).send("Wishlist is Empty!");
    }

    const WishItemsArr = JSON.parse(user.rows[0].wishitem);
    if (WishItemsArr.length == 0) {
      return res.status(400).send("Wishlist is Empty!");
    }
    const NewWishlist = WishItemsArr.filter((item) => item != req.params.id);
    const StrNewWishlist = JSON.stringify(NewWishlist);
    const UpdateWishlist = await pool.query(
      `UPDATE wishlist SET wishitem = $2 WHERE userid = $1`,
      [req.user.uid, StrNewWishlist]
    );
    res.send(NewWishlist);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
