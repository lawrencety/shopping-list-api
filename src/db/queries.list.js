const List = require('./models/list');

module.exports = {
  getAllLists() {
    return List.find()
  },

  createList(listOptions) {
    return List.create({
      name: listOptions.name
    })
  },

  getList(id) {
    return List.findById(id)
  },

  updateList(id, updatedList) {
    return List.findByIdAndUpdate(id, updatedList, {strict: true}, (err, list) => {
      if (err) {
        console.log(err)
        return err
      } else {
        return list
      }
    })
  },

  deleteList(id) {
    return List.findByIdAndDelete(id, (err, list) => {
      if (err) {
        console.log(err)
        return err
      } else {
        return list
      }
    })
  }

}
