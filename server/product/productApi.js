const express = require("express");

const productRouter = express.Router({ mergeParams: true });

const ProductManager = require("./ProductManager");
const ProductValidation = require("./middleware/ProductValidation");

module.exports = app => {
  app.use("/products", productRouter);
};

productRouter.post(
  "/",
  ProductValidation.create(),

  (req, res, next) =>
    ProductManager.create(req.validData)
      .then(createdProduct => res.json(createdProduct))
      .catch(next)
);

productRouter.get(
  "/",
  ProductValidation.list(),

  (req, res, next) =>
    ProductManager.getList(req.validData)
      .then(data => res.json(data))
      .catch(next)
);

productRouter.get(
  "/:productId",
  ProductValidation.productId(),

  (req, res, next) =>
    ProductManager.getById(req.validData.productId)
      .then(product => res.json(product))
      .catch(next)
);

productRouter.put(
  "/:productId",
  ProductValidation.update(),

  (req, res, next) =>
    ProductManager.update(req.validData)
      .then(product => res.json(product))
      .catch(next)
);

productRouter.delete(
  "/:productId",
  ProductValidation.productId(),

  (req, res, next) =>
    ProductManager.delete(req.validData)
      .then(() => res.json("product deleted"))
      .catch(next)
);
