var express  = require('express');
var app      = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var router = require('./router.js');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var io = require('socket.io')(http);
var configDB = require('../node/../config/database.js');


mongoose.connect(configDB.url);




app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({secret: '<mysecret>', 
                 saveUninitialized: true,
                 resave: true}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./pasport')(passport);

function server(config) {
    http.listen(config.get('port'), function () {
        console.log('The magic happens on port ' + config.get('port'));
    });
    router(app, express, passport,io,session);
}

module.exports = server;