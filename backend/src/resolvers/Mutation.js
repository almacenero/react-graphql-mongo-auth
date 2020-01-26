const Item = require("./../models/Item");

const createItem = async (root, args) => {
  let item = await new Item(args);

  item.save();
  return item;
};
module.exports = { createItem };
