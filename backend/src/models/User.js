const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/graphql-react-auth", {
  useNewUrlParser: true
});

let Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
