// Schema for the product CRUD.

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  Brands: {
    type: String,
    required: true,
  },

  Product_Name: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
