var express = require('express'),
  app = express(),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  http = require('http'),
  passport = require('passport'),
  LocalAPIKeyStrategy = require('passport-localapikey').Strategy,
  engine = require('ejs-locals');

// setup view engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// setup server
app.set('port', process.env.PORT || 5000);

// setup middleware
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'))

app.use(function(err, req, res, next) {
  if(!err) { return next(); }
  res.json(500, { message : 'Internal Server Error' });
});

// connect to Mongo and set up models
require('./api/models')();

// products related routes
require('./api/routes/products')(app);

app.get('/', function(req, res){
  res.render('home/index');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

// expose app
exports = module.exports = app;