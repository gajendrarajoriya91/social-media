const User = require("../models/userModel.js");
const { validateUser } = require("../validator/userValidator.js");
const { validationResult } = require("express-validator");

async function register(req, res) {
  //   console.log(req.body);
}

module.exports = {
  register,
};
