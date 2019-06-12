const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: Number
  },
  purchaseStatus: {
    type: Boolean,
    default: false
  }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = itemSchema;
