
//Require Mongoose
let mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
let Schema = mongoose.Schema

Project = new Schema (
	{
		name: { type: String, required: true , unique: true },
		image: { type: String, default: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' },
		url: String,
		source: String,
		tags: [String],
		description: { type: String, required: true },
		featured: { type: Boolean, default: true },
		updated: { type: Date, default: Date.now },
		date: { type: Date, default: Date.now },
		slug: { type: String, slug: "name", slug_padding_size: 1,  unique: true }
	}
)

let ProjectModel = mongoose.model('Project', Project)

module.exports = ProjectModel