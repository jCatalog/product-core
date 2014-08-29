var auth = require('../controllers/auth'),
  tenants = require('../controllers/tenants');

module.exports = function(app) {
  app.get('/tenants',
    auth.authenticate,
    tenants.index);

  app.post('/tenants',
    auth.authenticate,
    tenants.create);
};