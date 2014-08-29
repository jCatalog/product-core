var auth = require('../controllers/auth'),
  tenants = require('../controllers/tenants'),
  contracts = require('../controllers/contracts');

module.exports = function(app) {
  app.get('/tenants/:tenantId/contracts',
    auth.authenticate,
    tenants.ensureTenant,
    contracts.index);

  app.post('/tenants/:tenantId/contracts',
    auth.authenticate,
    tenants.ensureTenant,
    contracts.create);
};