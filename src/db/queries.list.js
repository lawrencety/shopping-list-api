const List = require('./models/list');

module.exports = {
  createList(listOptions) {
    return List.create({
      name: listOptions.name
    })
  },

  getAllLists() {
    return List.find()
  }
}
