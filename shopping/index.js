const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (_req, res, _next) => {
  return res.status(200).json({ msg: "Hello From Shopping" });
});

app.listen(8003, () => {
  console.log("Shopping is listning on Port 8003");
});
