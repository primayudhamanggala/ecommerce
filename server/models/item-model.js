const mongoose = require('mongoose');
const Schema = mongoose.Schema


var itemSchema = new Schema({
  itemName: String,
  image: String,
  price: Number,
  category: String,
  stock: Number
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item;
