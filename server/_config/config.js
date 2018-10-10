const path = require("path");
const _ = require("lodash");

const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || "development";

/**
 * Default configs applied to all environments. May be overwritten.
 */
const DEFAULT_ENV_CONFIG = {
  root: rootPath,
  db: "mongodb://localhost:27017/ammo-varejo",
  app: {
    name: "ammo-varejo"
  },
  frontUrl: "https://localhost:8888",
  port: process.env.PORT || 8888
};

/**
 * Current environment config.
 */
const config = _.merge(
  {},
  DEFAULT_ENV_CONFIG,
  {
    // DEVELOPMENT - App development
    development: {},

    // HOMOLOG - Production replica for testing purposes
    homolog: {},

    // PRODUCTION - Public access
    // TODO : CREATE Heroku Website, mongodb?
    production: {
      frontUrl: "HEROKU-WEBSITE-HERE",
      port: process.env.PORT || 8080,
      db: "mongodb://app:amm0m0ng0@localhost/ammovarejo"
    }
  }[env]
);

module.exports = config;
