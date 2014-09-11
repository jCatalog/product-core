// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ProductRelationSchema = new Schema({
  relatedProductId : {type: ObjectId},
  relatedCatalogId : {type: String},
  typeId : {type: String},
  statusId : {type: String},
  syncTypeId : {type: String},
  selectionGroupId : {type: String},
  
  quantity : {type: Number},

  seqNo : {type: String},
  udxText1 : {type: String},
  udxText2 : {type: String},
  udxText3 : {type: String},
  udxNum1 : {type: Number},
  udxNum2 : {type: Number},
  udxNum3 : {type: Number},
  udxSortKey1 : {type: String},
  udxSortKey2 : {type: String},
  udxSortKey3 : {type: String},

  isMandatory : {type: Boolean},
  isDefaultSelected : {type: Boolean},

  descriptions: {
    languageId : {type: String},
    description : {type: String}, 
  },

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: String},
  updatedBy : {type: String}
});

// timestamps
ProductRelationSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ProductRelation', ProductRelationSchema);