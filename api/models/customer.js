// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var CustomerSchema = new Schema({
  name : {type: String, unique: true},

  suppliersProvisioning : [{ type: ObjectId, ref: 'SupplierProvisioning' }],
  tenantUsage : [{ type: ObjectId, ref: 'TenantUsage' }],
  contractsUsage : [{ type: ObjectId, ref: 'ContractUsage' }]
});

// timestamps
CustomerSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Customer', CustomerSchema);