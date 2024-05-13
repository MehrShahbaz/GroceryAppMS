const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (_req, res, _next) => {
  return res.status(200).json({ msg: "Hello From Customer" });
});

app.listen(8001, () => {
  console.log("Customer is listning on Port 8001");
});
