var express  = require('express');
var app      = express();
var fileUpload = require('express-fileupload');
var http = require('http').Server(app);
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var router = require('./router.js');
var fileUpload = require('express-fileupload');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var io = require('socket.io')(http);
var configDB = require('../node/../config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(fileUpload());
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ====================================================================== // load our routes and pass in our app and fully configured passport

// launch ======================================================================

require('./pasport')(passport);

function server(config) {
    http.listen(config.get('port'), function () {
        console.log('The magic happens on port ' + config.get('port'));
    });
    router(app, express, passport,io,session);
}

module.exports = server;