var auth = require('../controllers/auth'),
  tenants = require('../controllers/tenants'),
  products = require('../controllers/products');

module.exports = function(app) {
  app.get('/tenants/:tenantId/products',
    auth.authenticate,
    tenants.ensureTenant,
    products.index);

  app.post('/tenants/:tenantId/products',
    auth.authenticate,
    tenants.ensureTenant,
    products.create);
};