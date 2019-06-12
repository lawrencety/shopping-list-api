const listQueries = require('../db/queries.list.js');
const mongoose = require('mongoose');

module.exports = {
  index(req, res, next) {
    listQueries.getAllLists()
    .then((lists) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: lists
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

  create(req, res, next) {
    let newList = {
      name: req.body.name
    }
    listQueries.createList(newList)
    .then((list) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: list
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

  show(req, res, next) {
    listQueries.getList(req.params.id)
    .then((list) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: list
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

  update(req, res, next) {
    let updatedList = req.body;
    console.log(updatedList)
    listQueries.updateList(req.params.id, updatedList)
    .then((list) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: list
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
    listQueries.deleteList(req.params.id)
    .then((list) => {
      let returnData = {
        statusCode: 200,
        message: 'Success',
        data: list
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
