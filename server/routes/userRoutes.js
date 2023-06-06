const express = require("express");
const router = express.Router();
const { signup, login, update } = require("../controller/userController");
const { fetchUser } = require("../middleware/fetchUser");
const { FormValidator } = require("../middleware/formValidation");
router.post("/signup", FormValidator, signup);
router.post("/login", login);
router.post("/update", fetchUser, update);

module.exports = router;
