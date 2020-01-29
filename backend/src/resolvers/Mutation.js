const Item = require("./../models/Item");
const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createItem = async (_, args, ctx) => {
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
const login = async (_, { email, password }) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("El usuario no existe");
  }
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    throw new Error("El password es incorrecto");
  }
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    "miclavesecreta",
    {
      expiresIn: "1h"
    }
  );
  return { userId: user._id, token: token, tokenExpiration: 1 };
};
module.exports = { createItem, createUser, login };
