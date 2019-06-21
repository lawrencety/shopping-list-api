const request = require('request');
const base = 'localhost:3000';
const server = require('../../src/server');
const io = require('socket.io-client')
const socket = io.connect(`ws://${base}`)

describe('WebSocket', () => {

  describe('receive generic message', () => {
    it('should log out the message', (done) => {
      socket.on('open')
      socket.on('message', (res) => {
        console.log(res)
        expect(res).not.toBeNull();
        expect(res).toBe('Hello World');
        done();
      })
    })
  })

  describe('send generic message', () => {
    it('should log out the message', (done) => {
      socket.on('open')
      const options = {
        data: 'Hello World'
      }
      socket.emit('message', options)
      socket.on('response', (res) => {
        expect(res).not.toBeNull();
        expect(res).toBe('Message received');
        done();
      })
    })
  })

  describe('send new list', () => {
    it('should return the new list', (done) => {
      socket.on('open')
      const options = {
        name: 'July 4th',
      }
      socket.emit('addedList', options)
      socket.on('newList', (res) => {
        expect(res).not.toBeNull();
        expect(res.name).toBe('July 4th')
        done();
      })
    })
  })

  describe('send new item', () => {
    it('should return the new item', (done) => {
      socket.on('open')
      const options = {
        name: 'Hot dogs',
        quantity: 10
      }
      socket.emit('addedItem', options)
      socket.on('newItem', (res) => {
        expect(res).not.toBeNull();
        expect(res.name).toBe('Hot dogs')
        done();
      })
    })
  })
})
