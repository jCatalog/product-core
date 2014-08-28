// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var LanguageSchema = new Schema({
  name : {type: String, unique: true}
});

// timestamps
LanguageSchema.plugin(timestamps);

// export
module.exports = mongoose.model('Language', LanguageSchema);