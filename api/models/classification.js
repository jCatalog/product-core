// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ClassificationSchema = new Schema({
  classificationGroupId : {type: ObjectId, index: true},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ClassificationSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Classification', ClassificationSchema);