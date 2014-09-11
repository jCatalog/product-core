// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema;

// schema
var ProductAttributeValueSchema = new Schema({
  statusId : {type: String},
  languageId : {type: String},
  
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

  createdBy : {type: String},
  updatedBy : {type: String}
});

// timestamps
ProductAttributeValueSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ProductAttributeValue', ProductAttributeValueSchema);