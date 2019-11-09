const express       = require('express');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const path          = require('path')
const cors          = require('cors')
const helmet        = require('helmet')
const bodyParser    = require('body-parser');
const http          = require('http');
const config        = require('config')
const appRoutes     = require('./routes/index')
// const Sequelize     = require('./models/sequelise/sequelize')
const Mongoose      = require('./models/mongoose/mongoose')


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public/inboxified/build')));
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*")
  next();
})

console.log("App name ",config.get('name'))
app.use('/api', appRoutes);
app.use(helmet());
app.disable('x-powered-by');

// send all get request to frontend to handle
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/inboxified/build/index.html'))
});


const port = process.env.PORT || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port,function(err,data){
    console.log(`Inboxified running on port ${port}`)
});


module.exports = app;