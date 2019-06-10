const List = require('./models').List;

module.exports = {
  createList(listOptions) {
    List.create({
      name: listOptions.name
    })
    .then((newList) => {
      callback(null, newList)
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    })
  }
}
