const Item = require("./../models/Item");
const User = require("./../models/User");
const bcrypt = require("bcryptjs");

const createItem = async (root, args) => {
  let item = await new Item(args);

  item.save();
  return item;
};

const createUser = async (root, args) => {
  args.email = args.email.toLowerCase();
  const password = await bcrypt.hash(args.password, 10);
  let user = await new User({
    ...args,
    password
  });

  user.save();
  return user;
};
module.exports = { createItem, createUser };
