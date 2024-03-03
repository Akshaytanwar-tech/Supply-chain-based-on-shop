const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShopkeeperSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  wholesellers: {
    type: Array,
  },
});
const Shopkeeper = mongoose.model("Shopkeeper", ShopkeeperSchema);
module.exports = Shopkeeper;
