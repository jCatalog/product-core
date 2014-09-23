// dependencies
var mongoose = require('mongoose'),
  junk = require('junk');

// export
module.exports = function() {
  mongoose.connect(process.env.MONGOLAB_URI, {
    db : {
      safe : true
    }
  });
  
  require('fs').readdirSync('./api/models').filter(junk.not).forEach(function(file) {
    require('./' + file);
  });
};