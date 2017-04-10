const dbItem = require('../models/item-model');

var createItem = function(req, res) {
  dbItem.create(req.body, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}


var getAllItem = function(req, res) {
  dbItem.find({}, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}


var updateItem = function(req, res) {
  dbItem.findByIdAndUpdate(req.params.id, req.body, (err,docs) => {
    if (err) {
      res.send(err)
    }else {
      res.send(docs)
    }
  })
}

var deleteItem = function(req, res) {
  dbItem.findByIdAndRemove(req.params.id, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}

module.exports = {
  createItem, getAllItem, updateItem, deleteItem
};
