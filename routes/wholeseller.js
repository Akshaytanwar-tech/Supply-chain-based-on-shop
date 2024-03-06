const express = require("express");
const router = express.Router();
const {
  createWholeseller,
} = require("../controllers/wholeseller/createWholeseller");
const { SignInWhl } = require("../controllers/wholeseller/SignInWhl");

// Route to create a wholeseller.
router.post("/createWholeseller", createWholeseller);

// Route to sign in a wholeseller
router.post("/signin", SignInWhl);
module.exports = router;
