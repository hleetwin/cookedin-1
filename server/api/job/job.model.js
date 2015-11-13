'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
  title: String,
  experience: String,
  restaurant: String,
  description: String,
  active: Boolean
});

module.exports = mongoose.model('Job', JobSchema);
