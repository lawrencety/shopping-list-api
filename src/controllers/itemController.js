const itemQueries = require('../db/queries.item.js');
const listQueries = require('../db/queries.list.js');
const mongoose = require('mongoose');

module.exports = {
  create(req, res, next) {
    const newItem = {
      name: req.body.name,
      quantity: req.body.quantity
    }
    listQueries.getList(req.params.listId)
    .then((list) => {
      let newList = itemQueries.createItem(list, newItem)
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: newList.items
      };
      res.json(returnData)
    })
  }
}
