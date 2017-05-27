//Require Mongoose
let mongoose = require('mongoose')

let Schema = mongoose.Schema

Blog = new Schema (
	{
		title: { type: String, required: true , unique: true },
		image: { type: String, default: 'https://openclipart.org/download/247324/abstract-user-flat-1.svg' },
		content: { type: String, required: true },
		updated: { type: Date, default: Date.now },
		date: { type: Date, default: Date.now }
	}
)

let BlogModel = mongoose.model('Blog', Blog)

module.exports = BlogModel