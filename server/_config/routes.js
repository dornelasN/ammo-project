const express = require("express");
const glob = require("glob");

const Boom = require("boom");
const path = require("path");

const rootPath = path.normalize(`${__dirname}/..`);

module.exports = (app, config) => {
  const env = process.env.NODE_ENV || "development";

  const apis = glob.sync(`${rootPath}/**/*Api.js`);

  apis.forEach(api => {
    require(api)(app);
  });

  // app.use("/css", express.static(`${rootPath}/public/css`));
  // app.use("/fonts", express.static(`${rootPath}/public/fonts`));
  // app.use("/img", express.static(`${rootPath}/public/img`));
  // app.use("/js", express.static(`${rootPath}/public/js`));
  // app.use("/favicon.ico", express.static(`${rootPath}/public/favicon.ico`));

  // app.all("/*", (req, res) => {
  //   res
  //     .status(200)
  //     .set({
  //       "content-type": "text/html; charset=utf-8"
  //     })
  //     .sendFile(`${rootPath}/public/index.html`);
  // });
  // app.use(express.static(`${rootPath}/public/static`));

  // Error handling
  app.use((err, req, res, next) => {
    let error = Boom.isBoom(err) ? err : Boom.boomify(err);
    if (error.name === "ValidationError") {
      error = Boom.boomify(error, {
        statusCode: 400
      });
    }
    if (process.env.NODE_ENV !== "test") console.trace(error);
    return res.status(error.output.statusCode).json({
      error: error.output.payload.error,
      message: error.message
    });
  });
};
