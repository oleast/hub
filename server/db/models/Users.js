// app/models/user.js
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

let Schema = mongoose.Schema

// define the schema for our user model
let User = new Schema({
	local: {
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	admin: { type: Boolean, default: false },
    fullname: { type: String },
    updated: { type: Date, default: Date.now },
	date: { type: Date, default: Date.now }
})

// generating a hash
User.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// checking if password is valid
User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password)
}

// generating a hash
User.statics.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', User)
