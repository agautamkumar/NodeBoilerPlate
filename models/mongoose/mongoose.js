const mongoDbConnection =  require('../database/mongoDb')
const mongoose          = require('mongoose')

//Schemas
const User = require('./user')

//Models
var userModel = mongoose.model('User', User.schema);  

module.exports = {
                  mongoose,
                  userModel
                }