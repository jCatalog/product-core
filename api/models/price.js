// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var PriceSchema = new Schema({
  productId : {type: ObjectId},
  contractId : {type: ObjectId},
  statusId : {type: ObjectId},
  currencyId : {type: ObjectId},
  priceTypeId : {type: ObjectId},
  unitOfMeasureId : {type: ObjectId},
  productIdExtensionForUoM : {type: ObjectId},

  netPrice : {type: Number},
  validFromQuantity : {type: Number},
  priceUnit : {type: Number},
  vatPercentage : {type: Number},
  description : {type: String},
  isPreferred : {type: Boolean},

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
PriceSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Price', PriceSchema);