const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');
const WebSocket = require('socket.io');
const handlers = require('./handlers');
const clientManager = require('./managers/clientManager');

mongoose.connect('mongodb://localhost/bloc-shopping-list', {useNewUrlParser: true, useFindAndModify: false})
.then(() => {
})
.catch((err) => {
  console.log(err);
})

/*
const uri = process.env.mongoSecret;
mongoose.connect(uri, {useNewUrlParser: true})
.then(() => {
  const collection = mongoose.db("test").collection("devices");
})
.catch((err) => {
  console.log(err);
});
*/
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  } else {
    return false;
  }
}

server.on('listening', () => {
  console.log(`Server is listening for requests on port ${server.address().port}`);
})

const io = WebSocket(server)

io.on('connection', (client) => {
  console.log('WebSocket connected')
  handlers.handleConnect(client)

  client.on('addedList', (list) => {
    handlers.handleNewList(list)
  })

  client.on('addedItem', (item) => {
    handlers.handleNewItem(item)
  })

  client.on('updatedList', (list) => {
    console.log('Please handle')
    handlers.handleListUpdate(list)
  })

  client.emit('message', 'Hello World');

  client.on('message', (message) => {
    handlers.handleMessage(client, message)
  })

  client.on('disconnect', () => {
    console.log('client disconnect...', client.id)
    handlers.handleDisconnect(client)
  })

  client.on('error', (err) => {
    console.log('received error from client:', client.id)
    console.log(err)
  })
});
