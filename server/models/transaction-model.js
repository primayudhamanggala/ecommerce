const mongoose = require('mongoose');
const Schema = mongoose.Schema

var transactionSchema = new Schema ({
  memberid: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  itemList: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
})


var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
