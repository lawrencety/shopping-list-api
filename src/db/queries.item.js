const List = require('./models/list');
const Item = require('./models/item');

module.exports = {
  createItem(list, newItem) {
    list.items.push(newItem);
    list.save();
    return list.items.slice(-1)[0]
  },

  updateItem(list, id, updatedItem) {
    list.items.id(id).set(updatedItem)
    list.save();
    return list.items.id(id)
  },

  deleteItem(list, id) {
    list.items.id(id).remove();
    list.save();
    return list
  }
}
