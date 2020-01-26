const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/graphql-react-auth", {
  useNewUrlParser: true
});

let Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  price_cost: Number
});

module.exports = mongoose.model("Item", itemSchema);
