// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var ProductSchema = new Schema({
  tenantId : {type: ObjectId},
  supplierId : {type: ObjectId},
  statusId : {type: ObjectId},
  
  mfgProductId : {type: ObjectId},
  mfgProductName : {type: String},
  
  manufactererId : {type: ObjectId},
  manufactererName : {type: String},
  
  extProductId : {type: ObjectId},
  productIdExtension : {type: ObjectId},
  unitOfMeasureId : {type: ObjectId},
  salesUnitOfMeasureId : {type: ObjectId},

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

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId},

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