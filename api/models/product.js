// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ProductSchema = new Schema({
  tenantId : {type: ObjectId, index: true},
  supplierId : {type: String},
  statusId : {type: String},
  
  mfgProductId : {type: String},
  mfgProductName : {type: String},
  
  manufactererId : {type: String},
  manufactererName : {type: String},
  
  extProductId : {type: String},
  productIdExtension : {type: String},
  unitOfMeasureId : {type: String},
  salesUnitOfMeasureId : {type: String},

  keywords : [{type: String}],
  ean : {type: String},

  isMainProdLine : {type: Boolean},
  isForSales : {type: Boolean},
  isSpecialOffer : {type: Boolean},
  isStocked : {type: Boolean},
  isPunchout : {type: Boolean},
  isConfigurable : {type: Boolean},

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: String},
  updatedBy : {type: String},

  classificationGroupAssociations : [{ type: ObjectId, ref: 'Product2ClassificationGroup' }],
  attributeValues : [{ type: ObjectId, ref: 'ProductAttributeValue' }],
  contractedProducts : [{ type: ObjectId, ref: 'ContractedProduct' }],
  prices : [{ type: ObjectId, ref: 'Price' }],
  productRelations : [{ type: ObjectId, ref: 'ProductRelation' }],
  documents : [{ type: ObjectId, ref: 'ProductDocAssociation' }]
});

// timestamps
ProductSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Product', ProductSchema);