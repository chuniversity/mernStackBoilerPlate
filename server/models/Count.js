const {Schema} = require('mongoose');
const mongoose = require('mongoose');


 const CountSchema = new Schema({
  id: Number, 
  count: Number, 
});

const Count = mongoose.model('count', CountSchema);

module.exports = Count;

