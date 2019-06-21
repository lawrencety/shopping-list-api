module.exports = () => {
  let clients = [];

  function addClient(newClient) {
    clients.push(newClient)
  }

  function removeClient(client) {
    newClients = clients.filter((c) => {
      return c.id !== client.id
    })
    console.log(client)
    clients = newClients
  }

  function broadcastNewList(list) {
    clients.forEach((client) => {
      client.emit('newList', list)
    })
  }

  function broadcastNewItem(item) {
    clients.forEach((client) => {
      client.emit('newItem', item)
    })
  }

  return {
    addClient,
    removeClient,
    broadcastNewList,
    broadcastNewItem
  }
}
