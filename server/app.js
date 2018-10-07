const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const ProductValidation = require("./product/middleware/ProductValidation");
const ProductManager = require("./product/ProductManager");

mongoose.connect("mongodb://localhost:27017/products")
const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback) {
	console.log("Mongodb Connection Succeeded!")
})

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.post("/products", 
  ProductValidation.create(),

  (req, res, next) => 
    ProductManager.create(req.validData)
      .then(createdProduct => res.json(createdProduct))
      .catch(next)
);

app.get("/products",
  ProductValidation.list(),

  (req, res, next) =>
    ProductManager.getList(req.validData)
      .then(data => res.json(data))
      .catch(next)
);

app.get("/products/:productId",
  ProductValidation.productId(),

  (req, res, next) => 
    ProductManager.getById(req.validData.productId)
      .then(product => res.json(product))
      .catch(next)
);

app.put("/products/:productId",
  ProductValidation.update(),

  (req, res, next) => 
    ProductManager.update(req.validData)
      .then(product => res.json(product))
      .catch(next)
);

app.delete("/products/:productId",
  ProductValidation.productId(),

  (req, res, next) => 
    ProductManager.delete(req.validData)
      .then(() => res.json('product deleted'))
      .catch(next)
);

app.listen(process.env.PORT || 8081);
