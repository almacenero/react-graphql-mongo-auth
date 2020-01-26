const Item = require("./../models/Item");
const User = require("./../models/User");

const createItem = async (root, args) => {
  let item = await new Item(args);

  item.save();
  return item;
};

const createUser = async (root, args) => {
  let user = await new User(args);

  user.save();
  return user;
};
module.exports = { createItem, createUser };
