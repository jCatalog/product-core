// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

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