// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var TenantSchema = new Schema({
  statusId : {type: ObjectId},
  
  description : {type: String},

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId},

  products : [{ type: ObjectId, ref: 'Product' }],
  catalogsProvisioning : [{ type: ObjectId, ref: 'CatalogProvisioning' }],
  catalogsUsage : [{ type: ObjectId, ref: 'CatalogUsage' }]
});

// timestamps
TenantSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Tenant', TenantSchema);