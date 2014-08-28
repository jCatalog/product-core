// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var SupplierSchema = new Schema({
  statusId : {type: ObjectId},
  name : {type: String},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId},

  products : [{ type: ObjectId, ref: 'Product' }],
  suppliersProvisioning : [{ type: ObjectId, ref: 'SupplierProvisioning' }],
  addresses : [{ type: ObjectId, ref: 'Address' }]
});

// timestamps
SupplierSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Supplier', SupplierSchema);