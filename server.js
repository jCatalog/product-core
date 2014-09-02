var express = require('express'),
  app = express(),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  http = require('http'),
  passport = require('passport'),
  LocalAPIKeyStrategy = require('passport-localapikey').Strategy;;

// setup server
app.set('port', process.env.PORT || 5000);

// setup middleware
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function(err, req, res, next) {
  if(!err) { return next(); }
  res.json(500, { message : 'Internal Server Error' });
});

// connect to Mongo and set up models
require('./api/models')();

var mongoose = require('mongoose'),
  User = mongoose.model('User');
  
passport.use(new LocalAPIKeyStrategy(
  function(apikey, done) {
    User.findOne({ apikey: apikey }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user);
    });
  }
));

// tenants related routes
require('./api/routes/tenants')(app);

// products related routes
require('./api/routes/products')(app);

// contracts related routes
require('./api/routes/contracts')(app);

// classification groups related routes
require('./api/routes/classification-groups')(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

// expose app
exports = module.exports = app;