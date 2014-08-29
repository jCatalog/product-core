var mongoose = require('mongoose'),
  ClassificationGroup = mongoose.model('ClassificationGroup'),
  JSONStream = require('JSONStream');

exports.index = function(req, res) {
  var opts = {
    tenantId: req.tenant._id
  };

  ClassificationGroup.find(opts).stream().pipe(JSONStream.stringify()).pipe(res);
};

exports.create = function(req, res) {
  var classificationGroup = {
    tenantId: req.tenant._id,
    createdBy: req.user
  };

  ClassificationGroup.create(classificationGroup, function(err, created) {
    if (err) { return res.json(500, { message: 'Internal Server Error' }); }
    res.status(201).json({ id: created._id });
  });
};