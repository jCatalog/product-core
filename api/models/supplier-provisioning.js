// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var SupplierProvisioningSchema = new Schema({
  supplierId : {type: ObjectId},
  customerId : {type: ObjectId},
  statusId : {type: ObjectId},
  isForUpload : {type: Boolean},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
SupplierProvisioningSchema.plugin(timestamps);

// export
module.exports = mongoose.model('upplierProvisioning', SupplierProvisioningSchema);