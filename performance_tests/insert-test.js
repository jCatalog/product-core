// connect to Mongo and set up models
require('../api/models')();

var mongoose = require('mongoose'),
    Product  = mongoose.model('Product');

console.log('--== INSERTING... ==-- ');
var i = 0;
var startTime = (new Date()).getTime();
while (i < 1000) {
  var y = 0;
  
  while (y < 10000) {
    Product.create({
      tenantId: i,
      supplierId: '1',
      statusId: '1',
      mfgProductId: '1',
      mfgProductName: '1',
      manufactererId: '1',
      manufactererName: 'Test',
      extProductId: '1',
      productIdExtension: '1',
      unitOfMeasureId: '1',
      salesUnitOfMeasureId: '1',
      keywords: ['performance', 'test'],
      ean: '123456',
      isMainProdLine: true,
      isForSales: true,
      isSpecialOffer: true,
      isStocked: true,
      isPunchout: true,
      isConfigurable: true,
      validFrom: new Date('2015-01-01'),
      validTo: new Date('2015-12-31'),
      createdBy: 'tester'
    });

    y++;
  };

  i++;
};
var endTime = (new Date()).getTime();

console.log('--== RESULTS ==-- ');
mongoose.connection.setProfiling(2, function(err, docs) {
  if (err) {
    console.log('  -- Error: ' + err.msg + ' --');
    process.exit();
  };

  mongoose.connection.db.stats({}, function(err, stats) {
    if (err) {
      console.log('  -- Error: ' + err.msg + ' --');
      process.exit();
    };

    console.log('  -- Time (in miliseconds): ' + (endTime - startTime));
    console.log('  -- Size (in bytes): ' + stats.storageSize);
    process.exit();
  });
  
});
