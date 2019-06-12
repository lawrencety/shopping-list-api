const List = require('../../src/db/models/list');
const mongoose = require('mongoose');

describe('List', () => {
  beforeEach((done) => {
    this.list;
    mongoose.connect('mongodb://localhost/bloc-shopping-list', {useNewUrlParser: true, useFindAndModify: false})
    .then(() => {
      List.deleteMany()
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })

  describe('#create()', () => {
    it('Should create a new list', (done) => {
      const options = {
        name: 'My First List'
      }
      List.create(options)
      .then((list) => {
        expect(list).not.toBeNull();
        expect(list.name).toBe('My First List')
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })

  describe('#insertMany()', () => {
    it('Should create multiple lists', (done) => {
      const options = [
        {name: 'My First List'},
        {name: 'My Second List'}
      ]
      List.insertMany(options)
      .then((lists) => {
        expect(lists).not.toBeNull();
        expect(lists.length).toBe(2)
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })

  describe('#find()', () => {
    it('Should find all lists', (done) => {
      const options = [
        {name: 'My First List'},
        {name: 'My Second List'}
      ]
      List.insertMany(options)
      .then((newLists) => {
        List.find()
        .then((lists) => {
          expect(lists).not.toBeNull();
          expect(lists.length).toBe(2)
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      })
    })
  })


})
