// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

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