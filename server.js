const express = require("express");
const app = express();
require("dotenv").config();
const connectTomongo = require("./db");
connectTomongo();
const port = process.env.PORT;

app.use(express.json());

// app.use("/api/player", require("./routes/wholeseller"));
// app.use("/api/team", require("./routes/shopkeeper"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
