const mongoose = require("mongoose");

const { statuses, categories } = require("./ProductStatics");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: Object.keys(statuses),
    default: statuses.ACTIVE
  },
  category: {
    type: String,
    enum: Object.keys(categories),
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [
    {
      type: String
    }
  ],
  price: {
    type: Number,
    required: true
  },
  deal: {
    type: Boolean,
    default: false
  },
  finalPrice: {
    type: Number,
    required: true,
  }
});

ProductSchema.statics.categories = categories;

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
