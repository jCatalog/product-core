var throng = require('throng'),
    jackrabbit = require('jackrabbit');

// connect to Mongo and set up models
require('./api/models')();

throng(start, { workers: 1 });

function start() {
  console.log('Started worker');
  console.log('before jackrabbit');
  var queue = jackrabbit(process.env.CLOUDAMQP_URL);
  console.log('after jackrabbit');
  queue.on('connected', function() {
    queue.handle('insert', function(job, ack) {
      console.log('Start Job');
      var products = new Array(10000000);
      var i = 0;
      for (var x = 1; x <= 1000; x++) {
        for (var y = 1; y <= 10000; y++) {
          var product = {
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
          };

          products[i] = product;
          i++;
        };
      };

      Product.collection.insert(products, function(a) {
        ack();
        process.on('SIGTERM', function() {
          console.log('Worker exiting');
          process.exit();
        });
      });
    });
  });
}
