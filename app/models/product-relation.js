// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var ProductRelationSchema = new Schema({
  relatedProductId : {type: ObjectId},
  relatedCatalogId : {type: ObjectId},
  typeId : {type: ObjectId},
  statusId : {type: ObjectId},
  syncTypeId : {type: ObjectId},
  selectionGroupId : {type: ObjectId},
  
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
    languageId : {type: ObjectId},
    description : {type: String}, 
  },

  validFrom : {type: Date},
  validTo : {type: Date},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ProductRelationSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ProductRelation', ProductRelationSchema);