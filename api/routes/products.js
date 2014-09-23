var products = require('../controllers/products');

module.exports = function(app) {
  app.get('/tenant/:tenantId/products',
    products.index);

  app.post('/tenant/:tenantId/products',
    products.create);
};