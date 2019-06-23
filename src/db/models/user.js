const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
    display: String
  },
  userToken: {
    type: String
  }
})

const List = mongoose.model('List', listSchema);

module.exports = List;
