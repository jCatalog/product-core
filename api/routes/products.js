var auth = require('../controllers/auth'),
  products = require('../controllers/products');

module.exports = function(app) {
  app.get('/tenant/:tenantId/products',
    auth.authenticate,
    products.index);

  app.post('/tenant/:tenantId/products',
    auth.authenticate,
    products.create);
};