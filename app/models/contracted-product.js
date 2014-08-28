// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var ContractedProductSchema = new Schema({
  productId : {type: ObjectId},
  statusId : {type: ObjectId},
  
  extProductId : {type: ObjectId},
  altExtProductId : {type: ObjectId},
  extClassificationId : {type: ObjectId},
  extClassificationGroupId : {type: ObjectId},
  extGLAccountId : {type: ObjectId},
  salesUnitOfMeasureId : {type: ObjectId},
  unitOfMeasureId : {type: ObjectId},
  currencyId : {type: ObjectId},

  descLong : {type: String},
  descShort : {type: String},
  priceQuantity : {type: Number},
  quantityInterval : {type: Number},
  maxQuantity : {type: Number},
  minQuantity : {type: Number},
  leadtimeInDays : {type: Number},
  timePeriod : {type: String},
  visibility : {type: Number},
  cost : {type: Number},
  ammount : {type: Number},
  discount : {type: Number},
  statusDate : {type: Date},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ContractedProductSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ContractedProduct', ContractedProductSchema);