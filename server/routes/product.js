var express = require("express");
var router = express.Router();

router.post(
  "/products",
  ProductValidation.create(),

  (req, res, next) =>
    ProductManager.create(req.validData)
      .then(createdProduct => res.json(createdProduct))
      .catch(next)
);

router.get(
  "/products",
  ProductValidation.list(),

  (req, res, next) =>
    ProductManager.getList(req.validData)
      .then(data => res.json(data))
      .catch(next)
);

router.get(
  "/products/:productId",
  ProductValidation.productId(),

  (req, res, next) =>
    ProductManager.getById(req.validData.productId)
      .then(product => res.json(product))
      .catch(next)
);

router.put(
  "/products/:productId",
  ProductValidation.update(),

  (req, res, next) =>
    ProductManager.update(req.validData)
      .then(product => res.json(product))
      .catch(next)
);

router.delete(
  "/products/:productId",
  ProductValidation.productId(),

  (req, res, next) =>
    ProductManager.delete(req.validData)
      .then(() => res.json("product deleted"))
      .catch(next)
);

module.exports = router;
