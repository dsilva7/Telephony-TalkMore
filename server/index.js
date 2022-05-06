const express = require("express");
const priceRouter = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(priceRouter);

app.listen(3001, () => {
  console.log("App running on port 3001");
});
