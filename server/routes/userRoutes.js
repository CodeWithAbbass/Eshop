const express = require("express");
const router = express.Router();
const { signup, login, update } = require("../controller/userController");
const { FormValidator } = require("../middleware/formValidation");
const { fetchUser } = require("../middleware/fetchUser");
router.post("/signup", FormValidator, signup);
router.post("/login", login);
router.post("/update", FormValidator, fetchUser, update);

module.exports = router;
