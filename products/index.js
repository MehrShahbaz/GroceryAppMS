const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (_req, res, _next) => {
  return res.status(200).json({ msg: "Hello From Products" });
});

app.listen(8002, () => {
  console.log("Products is listning on Port 8002");
});
