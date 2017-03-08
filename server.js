// require packages
var express         = require('express');
var mongoose        = require('mongoose');
var methodOverride  = require('method-override');
var bodyParser      = require('body-parser');
var logger          = require('morgan');

// require controllers

// start server
var app = express();

// configure middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));


// connect server
app.listen(process.env.PORT || 4000, function(){
  console.log('Server listening on 4000!')
})
