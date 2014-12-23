var kue = require('kue'), 
    jobs = kue.createQueue({
      prefix: 'q',
      redis: {
        port: 9344,
        host: 'mummichog.redistogo.com',
        auth: 'c813394adbbe7d8afb74b095a0906bbe'
      }
    });

// connect to Mongo and set up models
require('./api/models')();

jobs.process('perf.tests', function(job, done){
  console.log('Started job ' + job.data.name);

  var i = 0;
  for (var x = 1; x <= 1000; x++) {
    for (var y = 1; y <= 10000; y++) {
      Product.create({
        tenantId: x,
        supplierId: '1',
        statusId: '1',
        mfgProductId: '1',
        mfgProductName: 'Test',
        manufactererId: '1',
        manufactererName: 'Test',
        extProductId: '1',
        productIdExtension: '1',
        unitOfMeasureId: '1',
        salesUnitOfMeasureId: '1',
        keywords: 'key-1, key-2',
        ean: '123456',
        isMainProdLine: true,
        isForSales: true,
        isSpecialOffer: true,
        isStocked: true,
        isPunchout: true,
        isConfigurable: true,
        validFrom: '2014-12-05',
        validTo: '2015-06-01',
        createdBy: 'foo@bar'
      });
    };
  };

  
});