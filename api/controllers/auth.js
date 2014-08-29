var passport = require('passport');

exports.authenticate = function(req, res, next) {
  passport.authenticate('localapikey', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json(503); }
    
    req.user = user;
    next();
  })(req, res, next);
};