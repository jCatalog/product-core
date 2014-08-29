// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema;

// schema
var StatusSchema = new Schema({
  name : {type: String, unique: true}
});

// timestamps
StatusSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Status', StatusSchema);