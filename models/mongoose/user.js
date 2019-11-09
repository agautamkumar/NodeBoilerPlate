var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var schema = new Schema({
  name:  String,
  email: String,
  contact: String
});

module.exports = {schema} 