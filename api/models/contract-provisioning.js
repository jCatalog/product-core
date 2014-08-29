// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ContractProvisioningSchema = new Schema({
  contractId : {type: ObjectId},
  supplierId : {type: ObjectId},
  statusId : {type: ObjectId},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ContractProvisioningSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ContractProvisioning', ContractProvisioningSchema);