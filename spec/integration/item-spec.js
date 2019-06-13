const request = require('request');
const base = 'http://localhost:3000/';
const server = require('../../src/server');
const mongoose = require('mongoose');
const List = require('../../src/db/models/list');
const Item = require('../../src/db/models/item');

describe('routes', () => {
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

  describe('create', () => {
    it('should create an item in the list', (done) => {
      const options = {
        url: `${base}lists/${this.list._id}/create`,
        form: {
          name: 'Sugar cookies',
          quantity: 20
        }
      }
      request.post(options, (err, res, body) => {
        let result = JSON.parse(body);
        console.log(result);
        expect(result.data[0].name).toBe('Sugar cookies');
        done();
      })
    })
  })
})
