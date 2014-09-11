// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ProductDocAssociationSchema = new Schema({
  productId : {type: ObjectId},
  documentViewTypeId : {type: String},
  languageId : {type: String},
  
  description : {type: String},

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: String},
  updatedBy : {type: String}
});

// timestamps
ProductDocAssociationSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ProductDocAssociation', ProductDocAssociationSchema);