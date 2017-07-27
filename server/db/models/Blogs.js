//Require Mongoose
let mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
let Schema = mongoose.Schema

const Blog = new Schema (
	{
		title: { type: String, required: true , unique: true },
		image: { type: String, default: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9464-200.png' },
		content: { type: String, required: true },
		featured: { type: Boolean, default: true },
		updated: { type: Date, default: Date.now },
		date: { type: Date, default: Date.now },
		slug: { type: String, slug: "title", slug_padding_size: 1,  unique: true }
	}
)

module.exports = mongoose.model('Blog', Blog)
