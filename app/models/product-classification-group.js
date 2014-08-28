// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var Product2ClassificationGroupSchema = new Schema({
  productId : {type: ObjectId},
  classificationId : {type: ObjectId},
  classificationGroupId : {type: ObjectId},
  
  orderNro : {type: Number},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
Product2ClassificationGroupSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Product2ClassificationGroup', Product2ClassificationGroupSchema);