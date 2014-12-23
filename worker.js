var throng = require('throng'),
    jackrabbit = require('jackrabbit');

// connect to Mongo and set up models
require('./api/models')();

var queue = jackrabbit(process.env.CLOUDAMQP_URL);
queue.on('connected', function() {
  console.log('hasta acá llega');
  // queue.handle('insert', function(job, ack) {
  //   console.log('Start Job');
  //   ack();
  // });
});
