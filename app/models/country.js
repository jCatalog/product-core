// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var CountrySchema = new Schema({
  name : {type: String, unique: true}
});

// timestamps
CountrySchema.plugin(timestamps);

// export
module.exports = mongoose.model('Country', CountrySchema);