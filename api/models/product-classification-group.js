// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var Product2ClassificationGroupSchema = new Schema({
  productId : {type: ObjectId},
  classificationId : {type: String},
  classificationGroupId : {type: String},
  
  orderNro : {type: Number},

  createdBy : {type: String},
  updatedBy : {type: String}
});

// timestamps
Product2ClassificationGroupSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Product2ClassificationGroup', Product2ClassificationGroupSchema);