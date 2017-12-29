'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserSchema = new Schema({
  //  name: 'john',
  //  email: 'john@email.com',
  //  signupToken: 'ef32a95a-d6ee-405a-8e4b-515b235f7c54',
  //  signupTimestamp: Wed Jan 15 2014 19:08:27 GMT+0100 (CET),
  //  signupTokenExpires: Wed Jan 15 2014 19:08:27 GMT+0100 (CET),
  //  failedLoginAttempts: 0,
  //  salt: '48cf9da376703199c30ba5c274580c98',
  //  derived_key: '502967e5a6e55091f4c2c80e7989623f051070fd',
  name: {
    type: String,
    required: 'Kindly enter the name of user'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of user'
  },
  signupToken: {
    type: String
  },
  email: {
    type: String
  },
  email: {
    type: String
  },
  email: {
    type: String
  },
  signupTimestamp: {
    type: Number,
    default: Date.now()
  },
  signupTokenExpires: {
    type: Number,
    default: Date.now()
  },
  salt: {
    type: String
  },
  derived_key: {
    type: String
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'deleted'],
    default: 'draft'
  }
})

module.exports = mongoose.model('User', UserSchema)
