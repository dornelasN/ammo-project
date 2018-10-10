const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");

module.exports = (app, config) => {
  const env = process.env.NODE_ENV || "development";

  if (env === "development") {
    app.use(morgan("dev"));
  } else if (env !== "test") {
    app.use(morgan("short"));
  }

  if (env !== "test") {
    let whitelist = [];
    if (env !== "development") {
      whitelist = [
        "https://localhost:3000",
        "https://localhost:3001",
        "https://localhost:8888",
        "https://192.168.0.117:3000"
      ];
    } else if (env === 'homolog') {
			whitelist = [];
		} else if (env === 'production') {
			whitelist = [];
		}
		console.log('CORS whitelist: ', whitelist);
		app.use(
			cors({
				origin: whitelist,
			}),
		);
	}
	
	app.use(require('prerender-node').set('prerenderServiceUrl', config.prerenderUrl));

	app.use(
		bodyParser.json({
			limit: '3mb',
			type: 'application/json',
		}),
	);

	app.use(
		bodyParser.urlencoded({
			limit: '2.5mb',
			extended: true,
		}),
	);

	app.use(compression());
};
