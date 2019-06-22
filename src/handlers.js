const clientManager = require('./managers/clientManager')()

module.exports = {
  handleConnect(client) {
    clientManager.addClient(client)
  },

  handleDisconnect(client) {
    clientManager.removeClient(client)
  },

  handleMessage(client, message) {
    if (message.data === 'Hello World') {
      client.emit('response', 'Message received')
    }
  },

  handleNewList(list) {
    clientManager.broadcastNewList(list)
  },

  handleNewItem(item) {
    clientManager.broadcastNewItem(item)
  },

  handleListUpdate(list) {
    console.log('handle update')
    clientManager.broadcastList(list)
  },

  handleItemUpdate(item) {
    clientManager.broadcastItem(item)
  },

  handleListUpdate(clients, list) {
    client.emit('list', list)
  },

  handleItemUpdate(client, item) {
    client.emit('item', item)
  }
}
