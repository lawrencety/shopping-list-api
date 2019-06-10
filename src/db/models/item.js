const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
    type: Boolean
  }
})

const Item = mongoose.model('Item', itemSchema);
