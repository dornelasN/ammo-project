const Boom = require("boom");

const Product = require("./model/ProductModel");
const ProductStatics = require("./model/ProductStatics");

/**
 * Formats product document into derired form
 * @param {Product} Product document
 * @returns {Object} Formatted Product Object
 */

function formatProduct(product) {
  return product.toObject();
}

exports.getById = async id => {
  const product = await Product.findOne({
    _id: id,
    status: { $ne: ProductStatics.statuses.DELETED }
  });
  if (!product) return null;
  return formatProduct(product);
};

exports.getList = async ({ page, limit, order = "name", filter = {} }) => {
  const query = {};
  if (filter.status) query.status = filter.status;
  else query.status = { $ne: ProductStatics.statuses.DELETED };

  if (filter.general) {
    const regex = new RegExp(filter.general, "gi");
    query.$or = [
      {
        name: { $regex: regex }
      },
      {
        description: { $regex: regex }
      }
    ];
  }

  if (filter.category) query.category = filter.category;
  if (filter.deal) query.deal = filter.deal;

  const listLimit = parseInt(limit, 10);
  const listPage = parseInt(page, 10);
  let total = Product.find(query).countDocuments();
  let items = Product.find(query)
    .sort(order)
    .skip((listPage - 1) * listLimit)
    .limit(listLimit);

  [total, items] = await Promise.all([total, items]);
  items = items.map(formatProduct);

  return {
    items,
    total
  };
};

exports.update = async ({
  status,
  category,
  subCategory,
  name,
  description,
  deal,
  price,
  images
}) => {
  const product = await Product.findById(productId);

  if (!product || product.status === ProductStatics.statuses.DELETED)
    throw Boom.forbidden();

  const $set = {};
  if (status !== undefined) $set.status = status;

  if (category !== undefined) $set.category = category;
  if (subCategory !== undefined) $set.subCategory = subCategory;
  if (name !== undefined) $set.name = name;
  if (description !== undefined) $set.description = description;
  if (deal !== undefined) $set.deal = deal;
  if (price !== undefined) $set.price = price;
  if (images !== undefined) $set.images = images;

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { $set },
    { new: true }
  );

  return formatProduct(updatedProduct);
};

exports.create = async ({
  category,
  subCategory,
  name,
  description,
  deal,
  price,
  images
}) => {
  let product = new Product({
    category,
    subCategory,
    name,
    description,
    deal,
    price,
    images,
    // status: ProductStatics.statuses.ACTIVE,
  });

  product = await product.save();

  return formatProduct(product);
};

exports.delete = async ({ productId }) => {
  return Product.findByIdAndUpdate(productId, {
    $set: { status: ProductStatics.statuses.DELETED }
  });
};
