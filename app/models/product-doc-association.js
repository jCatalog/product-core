// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

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