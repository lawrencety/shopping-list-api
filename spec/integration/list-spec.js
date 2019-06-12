const request = require('request');
const base = 'http://localhost:3000/';
const server = require('../../src/server');
const mongoose = require('mongoose');
const List = require('../../src/db/models/list');

describe('routes', () => {
  beforeEach((done) => {
    this.list;
    mongoose.connect('mongodb://localhost/bloc-shopping-list', {useNewUrlParser: true})
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

  describe('create', () => {
    it('should create a new list', (done) => {
      const options = {
        url: `${base}lists/create`,
        form: {
          name: 'July 4th BBQ'
        }
      }
      request.post(options, (err, res, body) => {
        let result = JSON.parse(body)
        expect(err).toBeNull();
        expect(result.data.name).toBe('July 4th BBQ')
        done()
      })
    })
  })

  describe('show', () => {
    it('should return all lists', (done) => {
      const lists = [
        {name: 'My First List'},
        {name: 'My Second List'}
      ]
      List.insertMany(lists)
      .then((newLists) => {
        const options = {
          url: `${base}lists`
        }
        request.get(options, (err, res, body) => {
          let result = JSON.parse(body);
          expect(result).not.toBeNull();
          expect(result.data.length).toBe(2)
          done();
        })
      })
    })
  })

})
