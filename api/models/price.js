// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var PriceSchema = new Schema({
  productId : {type: ObjectId},
  contractId : {type: String},
  statusId : {type: String},
  currencyId : {type: String},
  priceTypeId : {type: String},
  unitOfMeasureId : {type: String},
  productIdExtensionForUoM : {type: String},

  netPrice : {type: Number},
  validFromQuantity : {type: Number},
  priceUnit : {type: Number},
  vatPercentage : {type: Number},
  description : {type: String},
  isPreferred : {type: Boolean},

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: String},
  updatedBy : {type: String}
});

// timestamps
PriceSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Price', PriceSchema);