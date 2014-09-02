var mongoose = require('mongoose'),
  ClassificationGroup = mongoose.model('ClassificationGroup'),
  JSONStream = require('JSONStream');

exports.ensureClassgroupsByTenant = function(req, res, next) {
  if(!req.query.classGroup) { return next();}
  var opts = {
    tenantId: req.tenant._id
  };

  ClassificationGroup.find(opts, { item: 1, qty: 1 }).exec(function(err, classGroups) {
    if (err) { return res.status(500).json({ message: 'Internal Server Error' }); }
    if (!classGroups) { return res.status(404).json({ message: 'Not Found' }); }
    req.classGroups = classGroups;
    next();
  });
};

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