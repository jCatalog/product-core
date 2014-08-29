// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var ClassificationGroupSchema = new Schema({
  tenantId : {type: ObjectId, index: true},

  createdBy : {type: ObjectId},
  updatedBy : {type: ObjectId}
});

// timestamps
ClassificationGroupSchema.plugin(timestamps);

// export
module.exports = mongoose.model('ClassificationGroup', ClassificationGroupSchema);