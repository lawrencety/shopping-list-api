const mongoose = require('mongoose');
const itemSchema = require('./item')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  items: [itemSchema]
})

const List = mongoose.model('List', listSchema);

module.exports = List;
