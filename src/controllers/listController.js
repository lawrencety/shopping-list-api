const listQueries = require('../db/queries.list.js');
const mongoose = require('mongoose');

module.exports = {
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
  }
}
