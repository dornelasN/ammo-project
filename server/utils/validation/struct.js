const { superstruct } = require("superstruct");
const validator = require("validator");
const v = require("voca");
const Boom = require("boom");

const productTypes = require("./types/product");

exports.struct = superstruct({
  types: {
    ...productTypes,

    empty: value => {
      if (value === "") return true;
      return false;
    },

    listPage: value => {
      if (value === undefined) return "page_required";
      if (value <= 0) return "page_too_small";
      return true;
    },

    listLimit: value => {
      if (value === undefined) return "limit_required";
      if (value <= 0) return "limit_too_small";
      if (value > 100) return "limit_too_big";
      return true;
    },

    mongoId: value => {
      if (value === undefined) return "mongoid_required";
      if (!validator.isMongoId(value)) return "invalid_mongoid";
      return true;
    },

    imageBase64: value => {
      if (value === undefined) return "imageBase64_required";
      const [fileType, base64] = value.split(",");
      if (!fileType.match(/^data:image\/(jpeg|png)/)) return "invalid_fileType";
      if (!validator.isBase64(base64)) return "invalid_base64";
      return true;
    },

    url: value => {
      if (value === undefined) return "url_required";
      if (!validator.isURL(value)) return "invalid_url";
      return true;
    },

    date: value => {
      if (value === undefined) return "date_required";
      if (!validator.toDate(value)) return "invalid_date";
      return true;
    },

    numeric: value => {
      if (value === undefined) return "number_required";
      if (!v.isNumeric(value)) return "invalid_number";
      return true;
    }
  }
});

exports.formatErrorMessage = error => {
  let errMessage = `${error.message}`;
  if (error.reason) errMessage += ` - ${error.reason}`;
  if (errMessage.length > 250) {
    errMessage = `${errMessage.slice(0, 150)} ... ${errMessage.slice(
      errMessage.length - 100,
      errMessage.length
    )}`;
  }
  return errMessage;
};

exports.validator = (reqPath, schema) => (req, res, next) => {
  try {
    console.log(req.validData);

    const Schema = exports.struct.partial(schema);
    req.validData = {
      ...req.validData,
      ...Schema(req[reqPath])
    };
    return next();
  } catch (error) {
		console.log({ ...error });
    return next(Boom.badRequest(exports.formatErrorMessage(error)));
  }
};
