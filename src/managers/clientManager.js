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
    console.log('Client length: ', clients.length)
    clients.forEach((client) => {
      console.log(client)
      client.emit('list', list)
    })
  };

  function broadcastItem(item) {
    clients.forEach((client) => {
      client.emit('item', item)
    })
  };

  return {
    addClient,
    removeClient,
    broadcastNewList,
    broadcastNewItem,
    broadcastList,
    broadcastItem
  }
}
