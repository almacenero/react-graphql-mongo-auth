const Item = require("./../models/Item");
const User = require("./../models/User");

const hello = (_, { name }) => `Hello ${name || "World"}`;

const items = async () => {
  const items = await Item.find({});
  return items;
};
const users = async () => {
  const users = await User.find({});
  return users;
};

module.exports = { hello, items, users };
