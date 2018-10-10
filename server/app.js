// const createError = require('http-errors');
const express = require("express");
const glob = require("glob");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");
const config = require("./_config/config");

const env = process.env.NODE_ENV || "development";

mongoose.connect(
  config.db,
  { config: { autoIndex: true, useNewUrlParser: true } }
);
const db = mongoose.connection;

db.on("error", () => {
  throw new Error(`Unable to connect to database at ${config.db}`);
});

const models = glob.sync(`${config.root}/**/model/*Model.js`, {
  ignore: `${config.root}/node_modules/**`
});
models.forEach(model => {
  require(model);
});
// const indexRouter = require("./routes/index");
// const productRouter = require("./routes/product");

const app = express();
require("./_config/express")(app, config);
require("./_config/routes")(app, config);

app.listen(config.port, () => {
  console.log(`Express server listening on port ${config.port}`);
});

module.exports = app;
