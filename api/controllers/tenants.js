var mongoose = require('mongoose'),
  Tenant = mongoose.model('Tenant'),
  JSONStream = require('JSONStream');

exports.ensureTenant = function(req, res, next) {
  var opts = {};

  if (req.params.tenantId) { opts._id = req.params.tenantId; }

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
    createdBy: req.user
  };

  Tenant.create(tenant, function(err, created) {
    if (err) { return res.json(500, { message: 'Internal Server Error' }); }
    res.status(201).json({ id: created._id });
  });
};