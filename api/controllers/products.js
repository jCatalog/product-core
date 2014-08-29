var mongoose = require('mongoose'),
  Product = mongoose.model('Product'),
  JSONStream = require('JSONStream');

exports.index = function(req, res) {
  var opts = {
    tenantId: req.tenant._id
  };

  if (req.contract) { opts.contractId = req.contract._id; }

  Product.find(opts).stream().pipe(JSONStream.stringify()).pipe(res);
};

exports.create = function(req, res) {
  var product = {
    tenantId: req.tenant._id,
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