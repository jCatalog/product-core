// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var TenantUsageSchema = new Schema({
  tenantId : {type: ObjectId},
  customerId : {type: ObjectId},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
TenantUsageSchema.plugin(timestamps);

// export
module.exports = mongoose.model('TenantUsage', TenantUsageSchema);