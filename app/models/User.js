const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String
})

UserSchema.pre('save', async function(next) {
  console.log('password', this.password)
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

module.exports = mongoose.model('User', UserSchema)
