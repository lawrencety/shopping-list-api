const request = require('request');
const base = 'http://localhost:3000/';
const server = require('../../src/server');
const mongoose = require('mongoose');
const List = require('../../src/db/models/list');

describe('routes', () => {
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
        expect(result.statusCode).toBe(200);
        expect(result.data.name).toBe('July 4th BBQ')
        done()
      })
    })
  })

  describe('index', () => {
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
          expect(result.statusCode).toBe(200);
          expect(result.data.length).toBe(2)
          done();
        })
      })
    })
  })

  describe('show', () => {
    it('should return the list with the corresponding ID', (done) => {
      List.create({name: 'July 4th BBQ'})
      .then((list) => {
        this.list = list;
        const options = {
          url: `${base}lists/${this.list._id}`
        }
        request.get(options, (err, res, body) => {
          let result = JSON.parse(body);
          expect(result).not.toBeNull();
          expect(result.statusCode).toBe(200);
          expect(result.data.name).toBe('July 4th BBQ');
          done();
        })
      })
    })
  })

  describe('update', () => {
    it('should update the list with the corresponding ID', (done) => {
      List.create({name: 'July 4th BBQ'})
      .then((list) => {
        this.list = list;
        const options = {
          url: `${base}lists/${this.list._id}/update`,
          form: {
            name: 'Independence Day'
          }
        }
        request.post(options, (err, res, body) => {
          let result = JSON.parse(body);
          expect(result.statusCode).toBe(200);
          List.findById(this.list._id)
          .then((list) => {
            expect(list).not.toBeNull();
            expect(list.name).toBe('Independence Day');
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

  describe('destroy', () => {
    it('should delete the list', (done) => {
      List.create({name: 'July 4th BBQ'})
      .then((list) => {
        this.list = list;
        const options = {
          url: `${base}lists/${this.list.id}/destroy`
        }
        request.post(options, (err, res, body) => {
          let result = JSON.parse(body);
          expect(result.statusCode).toBe(200);
          List.findById(this.list.id)
          .then((list) => {
            expect(list).toBeNull();
            done();
          })
          .catch((err) => {
            expect(list).toBeNull();
            console.log(err);
            done();
          })
        })
      })
    })
  })

})
