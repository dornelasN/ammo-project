const { struct, validator } = require("../../utils/validation/struct");

exports.productId = (reqPath = "params") =>
  validator(reqPath, {
    productId: "string & mongoId"
  });

exports.create = (reqPath = "body") =>
  validator(reqPath, {
    name: "string",
    category: "string & productCategory",
    subCategory: "string",
    description: "string",
    images: struct.optional(["url & string"]),

    price: "numeric",
    deal: "boolean"
  });

exports.list = (reqPath = "query") =>
  validator(reqPath, {
    page: "numeric?",
    limit: "numeric?",
    order: "string?",
    filter: struct.optional({
      general: "string?",
      status: "productStatus?",
      category: "productCategory?",
      deal: "string?"
    })
  });

exports.update = (reqPath = "body") =>
  validator(reqPath, {
    name: "string?",
    status: "productStatus?",
    category: "string & productCategory?",
    subCategory: "string?",
    description: "string?",
    images: struct.optional(["url & string"]),
    price: "numeric?",
    deal: "boolean?"
  });
