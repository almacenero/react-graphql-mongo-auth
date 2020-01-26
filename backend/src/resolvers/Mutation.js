const Item = require("./../models/Item");
const User = require("./../models/User");
const bcrypt = require("bcryptjs");

const createItem = async (_, args, ctx) => {
  console.log("ddddd", ctx.request.isAuth);
  if (!ctx.request.isAuth) {
    throw new Error("No estas autenticado");
  }

  let item = await new Item(args);

  item.save();
  return item;
};

const createUser = async (args, req) => {
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
