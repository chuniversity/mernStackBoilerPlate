const {Schema} = require('mongoose');
const mongoose = require('mongoose');


 const NameSchema = new Schema({
  id: Number, 
  name: String, 
});

const Name = mongoose.model('name', NameSchema);

module.exports = Name;

