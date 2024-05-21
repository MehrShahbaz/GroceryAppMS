const ProductService = require("../services/product-service");

module.exports = (app) => {
  const service = new ProductService();

  app.use("/app-event", async (req, res, next) => {
    const { payload } = req.body;

    service.SubscribeEvents(payload);

    console.log(
      "=================== Products Service Record Event ==================="
    );

    return res.status(200).json(payload);
  });
};
