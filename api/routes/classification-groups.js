var auth = require('../controllers/auth'),
  tenants = require('../controllers/tenants'),
  classificationGroups = require('../controllers/classificationGroups');

module.exports = function(app) {
  app.get('/tenants/:tenantId/classificationGroups',
    auth.authenticate,
    tenants.ensureTenant,
    classificationGroups.index);

  app.post('/tenants/:tenantId/classificationGroups',
    auth.authenticate,
    tenants.ensureTenant,
    classificationGroups.create);
};