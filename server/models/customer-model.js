const mongoose = require('mongoose');
const Schema = mongoose.Schema


var customerSchema = new Schema({
  id: String,
  name: String
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;
