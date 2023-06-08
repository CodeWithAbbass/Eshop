const express = require("express");
const router = express.Router();
const { get, signup, login, update } = require("../controller/userController");
const { fetchUser } = require("../middleware/fetchUser");
const { fetchAdmin } = require("../middleware/fetchAdmin");
const { FormValidator } = require("../middleware/formValidation");
router.get("/", get);
router.post("/signup", FormValidator, signup);
router.post("/login", login);
router.post("/update", update);

module.exports = router;
