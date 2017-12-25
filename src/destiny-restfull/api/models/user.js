'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserSchema = new Schema({
  user_name: {
    type: String,
    required: 'Kindly enter the name of table'
  },
  user_comment: {
    type: String
  },
  created_date: {
    type: Number,
    default: Date.now()
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'deleted'],
    default: 'draft'
  }
})

module.exports = mongoose.model('User', UserSchema)
