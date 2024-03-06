const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  wholeseller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wholeseller",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
