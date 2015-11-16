'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
  title: String,
  restaurant: String,
  location: String,
  description: String,
  experience: String,
  image: String
});

module.exports = mongoose.model('Job', JobSchema);
