// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var AddressSchema = new Schema({
  countryId : {type: ObjectId},
  name : {type: String},
  type : {type: String},
  isDefault : {type: Boolean},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId},

  suppliers : [{ type: ObjectId, ref: 'Supplier' }]
});

// timestamps
AddressSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Address', AddressSchema);