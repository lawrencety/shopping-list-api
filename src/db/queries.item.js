const List = require('./models/list');
const Item = require('./models/item');

module.exports = {
  createItem(listId, newItem) {
    return List.findById(listId).items.create(newItem);
  },

  
}
