const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const config = require('./config.js');

//edit localhost for database path
const mongoUrl = `mongodb://localhost:27017/${config.dbName}`;

const startMongo = async () => {
  const opt = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
  const db = mongoose.connection;
  db.on("connected", () => {
    console.log("Connected to db");
  });
  await mongoose.connect(mongoUrl, opt);
}





module.exports = startMongo;