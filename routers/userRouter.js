const express = require("express");
const { register } = require("../controllers/userController.js");

const router = express.Router();

//signup
router.post("/register", register);

module.exports = router;
