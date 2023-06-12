const express = require("express");
const router = express.Router();
const { get, signup, login, update } = require("../controller/userController");
const { fetchUser } = require("../middleware/fetchUser");
const { fetchAdmin } = require("../middleware/fetchAdmin");
const { regenrateAuthToken } = require("../middleware/regenrateAuthToken");
const { FormValidator } = require("../middleware/formValidation");
router.get("/", regenrateAuthToken, get);
router.post("/signup", FormValidator, signup);
router.post("/login", login);
router.post("/update", fetchUser, update);

module.exports = router;
