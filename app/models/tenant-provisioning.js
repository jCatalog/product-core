// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var TenantProvisioningSchema = new Schema({
  tenantId : {type: ObjectId},
  supplierId : {type: ObjectId},
  statusId : {type: ObjectId},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId},
});

// timestamps
TenantProvisioningSchema.plugin(timestamps);

// export
module.exports = mongoose.model('TenantProvisioning', TenantProvisioningSchema);