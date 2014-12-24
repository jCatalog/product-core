var mongoose = require('mongoose'),
  Product = mongoose.model('Product'),
  JSONStream = require('JSONStream'),
  kue = require('kue'), 
  jobs = kue.createQueue({
    prefix: 'q',
    redis: {
      port: 9344,
      host: 'mummichog.redistogo.com',
      auth: 'c813394adbbe7d8afb74b095a0906bbe'
    }
  });

exports.index = function(req, res) {
  if (!req.params.tenantId) { return res.json(404).json({ message: 'Bad Request' }) }

  var opts = {
      tenantId: req.params.tenantId
    },
    sort = {};

  if (req.contract) { opts.contractId = req.contract._id; }
  if (req.query.classGroup) { 
    opts['classificationGroupAssociations.id'] = { $in: req.classGroups };
  }

  if (req.query.sort) { 
    var keys = req.query.sort.split(',');
    for (var i in keys) {
      var item = keys[i].split(':');
      sort[item[0]] = item[1] === 'desc' ? '-1' : '1';
    }
  }

  Product.find(opts).sort(sort).stream().pipe(JSONStream.stringify()).pipe(res);
};

exports.create = function(req, res) {
  if (!req.params.tenantId) { return res.json(404).json({ message: 'Bad Request' }) }
    
  var product = {
    tenantId: req.params.tenantId,
    supplierId: req.body.supplierId,
    statusId: req.body.statusId,
    mfgProductId: req.body.mfgProductId,
    mfgProductName: req.body.mfgProductName,
    manufactererId: req.body.manufactererId,
    manufactererName: req.body.manufactererName,
    extProductId: req.body.extProductId,
    productIdExtension: req.body.productIdExtension,
    unitOfMeasureId: req.body.unitOfMeasureId,
    salesUnitOfMeasureId: req.body.salesUnitOfMeasureId,
    keywords: req.body.keywords,
    ean: req.body.ean,
    isMainProdLine: req.body.isMainProdLine,
    isForSales: req.body.isForSales,
    isSpecialOffer: req.body.isSpecialOffer,
    isStocked: req.body.isStocked,
    isPunchout: req.body.isPunchout,
    isConfigurable: req.body.isConfigurable,
    validFrom: req.body.validFrom,
    validTo: req.body.validTo,
    createdBy: req.user
  };

  Product.create(product, function(err, created) {
    if (err) { return res.json(500, { message: 'Internal Server Error' }); }
    res.status(201).json({ id: created._id });
  });
};

exports.bulkInsert = function(req, res) {
  var job = jobs.create('perf.tests', {
    name: 'insert'
  }).save( function(err){
    if( !err ) {
      res.json(200);
    } else {
      res.json(500, { err: err });
    }
  });
}