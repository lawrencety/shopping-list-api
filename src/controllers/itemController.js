const itemQueries = require('../db/queries.item.js');
const mongoose = require('mongoose');

module.exports = {
  create(req, res, next) {
    const newItem = {
      name: req.body.name,
      quantity: req.body.quantity
    }
    itemQueries.createItem(req.params.listId, newItem)
    .then((item) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: item
      };
      res.json(returnData)
    })
    .catch((err) => {
      console.log(err)
      let returnData = {
        statusCode: 400,
        message: 'Bad Request',
        data: err
      };
      res.json(returnData)
    })
  }
}
