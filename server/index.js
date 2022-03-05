const express = require('express');
const startMongo = require("./mongoConnect");
// const morgan = require('morgan');  // add morgan (logging) if needed

const app = express();
const Count = require('./models/Count');
const Name = require('./models/Name');

const router = require('./routes');

const PORT = 4000;
// app.use(morgan('combined')); // add morgan if needed
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '../client/public'));
app.use(router);

const startServer = async () => {
  await startMongo()
  app.listen(4000, () => {
    console.log(`listening on port 4000`)
  });
}

startServer()
