// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ProductDocAssociationSchema = new Schema({
  productId : {type: ObjectId},
  documentViewTypeId : {type: ObjectId},
  languageId : {type: ObjectId},
  
  description : {type: String},

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ProductDocAssociationSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ProductDocAssociation', ProductDocAssociationSchema);