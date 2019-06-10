const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
