const {
  categories,
  statuses
} = require("../../../product/model/ProductStatics");

module.exports = {
  productStatus: v => {
    if (v === undefined) return "status_required";
    const statusList = Object.values(statuses);
    statusList.splice(statusList.indexOf(statuses.DELETED), 1);
    if (!statusList.includes(v)) return "invalid_status";
    return true;
  },
  productCategory: v => {
    const categoriesList = Object.values(categories);
    if (!categoriesList.includes(v)) return "invalid_type";
    return true;
  }
};
