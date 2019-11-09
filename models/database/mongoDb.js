const config   = require('config')
var   mongoose   = require('mongoose');
const db_name  = config.get('database.MongoDb.db_name')
const dialect  = config.get('database.MongoDb.dialect')
// const username = config.get('database.MongoDb.username')
// const password = config.get('database.MongoDb.password')
const host     = config.get('database.MongoDb.host')


function mongo(){
  mongoose.connect(`mongodb://${host}/${db_name}`, 
{
  useNewUrlParser: true,
 useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo db connection error:'));
db.once('open', function() {  
  console.log("MongoDb is connected")
});}
mongo()

  module.exports =  mongo
  