// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var CountrySchema = new Schema({
  name : {type: String, unique: true}
});

// timestamps
CountrySchema.plugin(timestamps);

// export
module.exports = mongoose.model('Country', CountrySchema);