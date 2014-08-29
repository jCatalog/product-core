var mongoose = require('mongoose'),
  Tenant = mongoose.model('Tenant'),
  JSONStream = require('JSONStream');

exports.ensureTenant = function(req, res, next) {
  var opts = {};

  if (req.params.post_id) { opts._id = req.params.post_id; }

  Tenant.findOne(opts, function(err, tenant) {
    if (err) { return res.json(500, { message: 'Internal Server Error' }); }
    if (!tenant) { return res.json(404, { message: 'Not Found' }); }
    req.tenant = tenant;
    next();
  });
};

exports.index = function(req, res) {
  Tenant.find().stream().pipe(JSONStream.stringify()).pipe(res);
};

exports.create = function(req, res) {
  var tenant = {
    description: req.body.description,
    statusId: req.body.statusId,
    validFrom: req.body.validFrom,
    validTo: req.body.validTo,
    created_by: req.user
  };

  Tenant.create(tenant, function(err, created) {
    if (err) { return res.json(500, { message: 'Internal Server Error' }); }
    res.json(201, { id: created._id });
  });
};