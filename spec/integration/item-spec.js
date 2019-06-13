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
        expect(result.statusCode).toBe(200);
        expect(result.data[0].name).toBe('Sugar cookies');
        done();
      })
    })
  })

  describe('update', () => {
    it('should update the selected item', (done) => {
      this.list.items.push({
        name: 'Sugar cookies',
        quantity: 20
      })
      this.item = this.list.items[0];
      this.list.save();
      const options = {
        url: `${base}lists/${this.list._id}/items/${this.item._id}/update`,
        form: {
          quantity: 10
        }
      }
      request.post(options, (err, res, body) => {
        let result = JSON.parse(body);
        expect(result.statusCode).toBe(200);
        expect(result.data.quantity).toBe(10);
        done();
      })
    })
  })


})
