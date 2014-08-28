// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var ContractUsageSchema = new Schema({
  contractId : {type: ObjectId},
  customerId : {type: ObjectId},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ContractProvisioningSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ContractProvisioning', ContractProvisioningSchema);