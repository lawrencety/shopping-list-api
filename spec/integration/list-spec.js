const request = require('request');
const base = 'http://localhost:3000/';
const server = require('../../src/server');
const mongoose = require('mongoose');

describe('routes', () => {
  beforeEach((done) => {
    this.list;
    mongoose.connect('mongodb://localhost/bloc-shopping-list', {useNewUrlParser: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
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

  
})
