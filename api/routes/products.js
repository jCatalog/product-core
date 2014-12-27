var products = require('../controllers/products');

module.exports = function(app) {
  app.get('/api/tenant/:tenantId/products',
    products.index);

  app.post('/api/tenant/:tenantId/products',
    products.create);

  app.post('/api/products',
    products.bulkInsert);

  app.get('/api/tenant/:tenantId/csv/products',
    products.exportToFile);
};