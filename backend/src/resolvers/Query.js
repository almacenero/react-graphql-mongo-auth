const Item = require("./../models/Item");

const hello = (_, { name }) => `Hello ${name || "World"}`;
const items = async () => {
  const items = await Item.find({});
  return items;
};
module.exports = { hello, items };
