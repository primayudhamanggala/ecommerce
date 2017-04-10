const dbCustomer = require('../models/customer-model');

var createCustomer = function(req, res) {
  dbCustomer.findOne({id: req.body.id}, (err, user) => {
    if (err) {
      res.send(err)
    }else {
      console.log(user);
      if (user == null) {
        dbCustomer.create(req.body, (err, docs) => {
          if (err) {
            res.send(err)
          } else {
            res.send(docs)
          }
        })
      }else {
        console.log(user);
        res.send(user)
      }
    }
  })
}

module.exports = {
  createCustomer
};
