const List = require('./models/list');
const Item = require('./models/item');

module.exports = {
  createItem(list, newItem) {
    list.items.push(newItem);
    return list
  },

  updateItem(list, id, updatedItem) {
    return list.items.id(id).set(updatedItem)
  },

  deleteItem(list, id) {
    list.items.id(id).remove();
    return list.save();
  }
}
