const mongoose = require("mongoose");
const { Schema } = mongoose;

const WholesellerSchema = new Schema({
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
  uniqueID: {
    type: String,
    required: true,
    unique: true,
  },
});
const Wholeseller = mongoose.model("Wholeseller", WholesellerSchema);
module.exports = Wholeseller;
