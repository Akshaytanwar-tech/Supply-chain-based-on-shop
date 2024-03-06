//------------------- Api to create a Wholeseller -------------------------

const Wholeseller = require("../../models/wholeseller");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { constant } = require("./constant");
require("dotenv").config();

const createWholeseller = async (req, res) => {
  try {
    const saltRounds = 10;

    const { name, shopName, email, password, Mobile } = req.body;

    //Checking if the wholeseller is already found
    const isWholeseller = await Wholeseller.findOne({ email: email });
    if (isWholeseller) {
      constant.success = false;
      return res.status(400).json({ status: "Wholeseller is already found" });
    }

    // Making hash and salt of the password to secure them using bcrypt js
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(password, salt);

    // creating the wholeseller in the database.
    const wholeseller = await Wholeseller.create({
      name: name,
      shopName: shopName,
      email: email,
      password: hash,
      Mobile: Mobile,
      uniqueID: uuidv4(),
    });

    if (!wholeseller) {
      constant.success = false;
      res.send({
        success: constant.success,
        error: "Unexpected database error",
      });
    }

    // taking the user id and send it to the jwt to generate token.
    const data = {
      wholeseller: {
        id: wholeseller.id,
      },
    };

    // Generating the token for the user.
    var token = jwt.sign(data, process.env.JWT_SECRET);

    // If token is not generated
    if (!token) {
      constant.success = false;
      res.json({ success: constant.success, error: "token is not generated" });
    }

    constant.success = true;
    res.json({ success: constant.success, token: token });
  } catch (error) {
    res.send({ success: constant.success, error: "Unexpected error" });
  }
};

module.exports = { createWholeseller };
