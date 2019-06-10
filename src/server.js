const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bloc-shopping-list')
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((err) => {
    console.log(err);
  })

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lawrencety:<password>@bloc-shopping-list-agucq.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
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
