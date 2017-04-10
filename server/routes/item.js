const express = require('express');
const router = express.Router()
const itemController = require('../controllers/item-controller');

router.post('/', itemController.createItem)

router.get('/', itemController.getAllItem)

router.put('/:id', itemController.updateItem)

router.delete('/:id', itemController.deleteItem)


module.exports = router;
