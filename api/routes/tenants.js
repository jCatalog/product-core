var tenants = require('../controllers/tenants');

module.exports = function(app) {
  app.get('/tenants',
    tenants.index);

  app.post('/tenants',
    tenants.create);
};