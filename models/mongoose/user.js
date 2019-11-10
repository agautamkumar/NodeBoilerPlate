var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var schema = new Schema({
  name     :  String,
  email    : String,
  contact  : String,
  password : String
});

module.exports = {schema} 