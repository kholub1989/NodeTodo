require('dotenv').config()
var express = require('express')
var app = express();
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname, + '/public'));

app.set('view engine', 'ejs');


mongoose.connect('mongodb+srv://' + process.env.uname + ':' + process.env.pwd + '@cluster0-tkdzb.mongodb.net/test?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true });

setupController(app);
apiController(app);

app.listen(port);