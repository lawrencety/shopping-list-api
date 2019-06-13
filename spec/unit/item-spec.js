const List = require('../../src/db/models/list');
const Item = require('../../src/db/models/item');
const mongoose = require('mongoose');

describe('Item', () => {
  beforeEach((done) => {
    this.list;
    this.item;
    mongoose.connect('mongodb://localhost/bloc-shopping-list', {useNewUrlParser: true, useFindAndModify: false})
    .then(() => {
      List.deleteMany()
      .then(() => {
        List.create({
          name: 'Christmas Dinner'
        })
        .then((list) => {
          this.list = list;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      })
    })
  })

  describe('#push()', () => {
    it('Should create a new item in the list', (done) => {
      const options = {
        name: 'My First Item',
        quantity: 10
      }
      this.list.items.push(options)
      expect(this.list.items.length).toBe(1);
      let item = this.list.items[0];
      expect(item).not.toBeNull();
      expect(item.name).toBe('My First Item')
      done();
    })
  })

})
