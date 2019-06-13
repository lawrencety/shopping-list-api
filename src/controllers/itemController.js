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
    .catch((err) => {
      console.log(err);
      let returnData = {
        statusCode: 400,
        message: 'Bad Request',
        data: err
      };
      res.json(returnData)
    })
  },

  update(req, res, next) {
    const updatedItem = req.body;
    listQueries.getList(req.params.listId)
    .then((list) => {
      let item = itemQueries.updateItem(list, req.params.id, updatedItem)
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
  },

  setPurchaseStatusTrue(req, res, next) {
    const updatedStatus = {purchaseStatus: true};
    listQueries.getList(req.params.listId)
    .then((list) => {
      let item = itemQueries.updateItem(list, req.params.id, updatedStatus)
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
  },

  setPurchaseStatusFalse(req, res, next) {
    const updatedStatus = {purchaseStatus: false};
    listQueries.getList(req.params.listId)
    .then((list) => {
      let item = itemQueries.updateItem(list, req.params.id, updatedStatus)
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
  },

  destroy(req, res, next) {
    listQueries.getList(req.params.listId)
    .then((list) => {
      let newList = itemQueries.deleteItem(list, req.params.id)
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: newList.items
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
