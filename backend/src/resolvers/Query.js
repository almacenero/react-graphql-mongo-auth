const Item = require("./../models/Item");
const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hello = (_, { name }) => `Hello ${name || "World"}`;

const items = async () => {
  const items = await Item.find({});
  return items;
};
const users = async () => {
  const users = await User.find({});
  return users;
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
module.exports = { hello, items, users, login };
