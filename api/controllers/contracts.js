var mongoose = require('mongoose'),
  Contract = mongoose.model('Contract'),
  JSONStream = require('JSONStream');

exports.ensureContract = function(req, res, next) {
  var opts = {};

  if (req.params.contractId) { opts._id = req.params.contractId; }

  Contract.findOne(opts, function(err, contract) {
    if (err) { return res.status(500).json({ message: 'Internal Server Error' }); }
    if (!contract) { return res.status(404).json({ message: 'Not Found' }); }
    req.contract = contract;
    next();
  });
};

exports.index = function(req, res) {
  var opts = {
    tenantId: req.tenant._id
  };

  Contract.find(opts).stream().pipe(JSONStream.stringify()).pipe(res);
};

exports.create = function(req, res) {
  var contract = {
    tenantId: req.tenant._id,
    currencyId: req.body.currencyId,
    statusId: req.body.statusId,
    extContractId: req.body.extContractId,
    description: req.body.description,
    minOrderValue: req.body.minOrderValue,
    maxOrderValue: req.body.maxOrderValue,
    validFrom: req.body.validFrom,
    validTo: req.body.validTo,
    createdBy: req.user
  };

  Contract.create(contract, function(err, created) {
    if (err) { return res.json(500, { message: 'Internal Server Error' }); }
    res.status(201).json({ id: created._id });
  });
};