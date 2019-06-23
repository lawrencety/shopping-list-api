module.exports = () => {
  let clients = [];

  function addClient(newClient) {
    console.log('Add client ', newClient.id)
    clients.push(newClient)
    console.log('Client length: ', clients.length)
  };

  function removeClient(client) {
    newClients = clients.filter((c) => {
      return c.id !== client.id
    })
    console.log('Remove client ', client.id)
    clients = newClients
  };

  function broadcastNewList(list) {
    clients.forEach((client) => {
      client.emit('newList', list)
    })
  };

  function broadcastNewItem(item) {
    clients.forEach((client) => {
      client.emit('newItem', item)
    })
  };

  function broadcastList(list) {
    clients.forEach((client) => {
      client.emit('list', list)
    })
  };

  function broadcastItem(item) {
    clients.forEach((client) => {
      client.emit('item', item)
    })
  };

  function broadcastDeleteList(listId) {
    clients.forEach((client) => {
      client.emit('deleteList', listId)
    })
  };

  function broadcastDeleteItem(itemId) {
    clients.forEach((client) => {
      client.emit('deleteItem', itemId)
    })
  };

  return {
    addClient,
    removeClient,
    broadcastNewList,
    broadcastNewItem,
    broadcastList,
    broadcastItem,
    broadcastDeleteList,
    broadcastDeleteItem    
  }
}
