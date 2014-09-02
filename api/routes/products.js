var auth = require('../controllers/auth'),
  tenants = require('../controllers/tenants'),
  contracts = require('../controllers/contracts'),
  classGroups = require('../controllers/classification-groups'),
  products = require('../controllers/products');

module.exports = function(app) {
  app.get('/tenants/:tenantId/products',
    auth.authenticate,
    tenants.ensureTenant,
    classGroups.ensureClassgroupsByTenant,
    products.index);

  app.get('/tenants/:tenantId/contracts/:contractId/products',
    auth.authenticate,
    tenants.ensureTenant,
    contracts.ensureContract,
    products.index);

  app.post('/tenants/:tenantId/products',
    auth.authenticate,
    tenants.ensureTenant,
    products.create);
};