var auth = require('../controllers/auth'),
  tenants = require('../controllers/tenants');

module.exports = function(app) {
  app.post('/tenant',
    auth.authenticate,
    tenants.create);
};