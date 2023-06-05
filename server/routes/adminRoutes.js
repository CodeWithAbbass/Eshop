const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { adminSignup ,adminLogin} = require('../controller/adminController');
const fetchAdmin = require('../middleware/fetchAdmin');

// Route: 1. Create a Admin using: POST "/api/auth/createadmin". No Login Require.
router.post('/signup',  adminSignup)
router.post('/login' ,adminLogin)


module.exports = router;
