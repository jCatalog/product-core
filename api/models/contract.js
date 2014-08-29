// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ContractSchema = new Schema({
  tenantId : {type: ObjectId, index: true},
  currencyId : {type: ObjectId},
  statusId : {type: ObjectId},
  
  extContractId : {type: ObjectId},
  description : {type: String},
  minOrderValue : {type: Number},
  maxOrderValue : {type: Number},
  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId},

  contractsProvisioning : [{ type: ObjectId, ref: 'ContractProvisioning' }],
  contractsUsage : [{ type: ObjectId, ref: 'ContractUsage' }],
  contractedsProduct : [{ type: ObjectId, ref: 'ContractedProduct' }]
});

// timestamps
ContractSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Contract', ContractSchema);