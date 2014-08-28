// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var ProductAttributeValueSchema = new Schema({
  statusId : {type: ObjectId},
  languageId : {type: ObjectId},
  
  attribute : {type: String, enum: [
    'LongDescription', 
    'ShortDescription', 
    'DocumentNormal',
    'DocumentDetails',
    'DocumentThumbnail',
    'DocumentPicture',
    'DocumentWebsite',
    'DocumentMSDS',
    'DocumentTechSpec',
    'DocumentDrawing',
    'DocumentVideo',
    'DocumentOther'
  ]},

  value : {type: String},
  orderNro : {type: Number},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ProductAttributeValueSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ProductAttributeValue', ProductAttributeValueSchema);