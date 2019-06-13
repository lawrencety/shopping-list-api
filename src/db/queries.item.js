const List = require('./models/list');
const Item = require('./models/item');

module.exports = {
  createItem(list, newItem) {
    list.items.push(newItem);
    return list
  }
}
