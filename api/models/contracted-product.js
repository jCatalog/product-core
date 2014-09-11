// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ContractedProductSchema = new Schema({
  productId : {type: ObjectId},
  statusId : {type: String},
  
  extProductId : {type: String},
  altExtProductId : {type: String},
  extClassificationId : {type: String},
  extClassificationGroupId : {type: String},
  extGLAccountId : {type: String},
  salesUnitOfMeasureId : {type: String},
  unitOfMeasureId : {type: String},
  currencyId : {type: String},

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

  createdBy : {type: String},
  updatedBy : {type: String}
});

// timestamps
ContractedProductSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ContractedProduct', ContractedProductSchema);