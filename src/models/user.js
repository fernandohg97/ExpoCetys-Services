'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  name: {type: String, required: true},
  avatar: String,
  password: {type: String, required: true, select: false},
  signupDate: {type: Date, default: Date.now()},
  lastLogin: Date
})

userSchema.pre('save', function (next) {
  // this = userSchema
  let user = this
  if (!user.isModified('password')) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next()

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', userSchema)
