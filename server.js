const express = require("express");
const app = express();
const wholeseller = require("./routes/wholeseller");
const shopkepper = require("./routes/shopkepper");
const category = require("./routes/category");
const product = require("./routes/product");
const connectTomongo = require("./db");
require("dotenv").config();
connectTomongo();
const port = process.env.PORT;

app.use(express.json());

// Routes
app.use("/api/wholeseller", wholeseller);
app.use("/api/shopkepper", shopkepper);
app.use("/api/category", category);
app.use("/api/product", product);

app.listen(port, () => {
  console.log(`Supply chain sever is listening on port ${port}`);
});
