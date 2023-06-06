const express = require("express");
const router = express.Router();
const { signup, login, update } = require("../controller/adminController");
const { fetchAdmin } = require("../middleware/fetchAdmin");
const { FormValidator } = require("../middleware/formValidation");

router.post("/signup", FormValidator, signup);
router.post("/login", login);
router.post("/update", fetchAdmin, update);

module.exports = router;
