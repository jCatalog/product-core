// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

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