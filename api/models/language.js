// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var LanguageSchema = new Schema({
  name : {type: String, unique: true}
});

// timestamps
LanguageSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Language', LanguageSchema);