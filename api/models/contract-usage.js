// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ContractUsageSchema = new Schema({
  contractId : {type: ObjectId},
  customerId : {type: ObjectId},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ContractUsageSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ContractUsage', ContractUsageSchema);