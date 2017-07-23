//Require Mongoose
let mongoose = require('mongoose')

let Schema = mongoose.Schema

const Blog = new Schema (
	{
		title: { type: String, required: true , unique: true },
		image: { type: String, default: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9464-200.png' },
		content: { type: String, required: true },
		featured: { type: Boolean, default: true },
		updated: { type: Date, default: Date.now },
		date: { type: Date, default: Date.now }
	}
)

module.exports = mongoose.model('Blog', Blog)