
//Require Mongoose
let mongoose = require('mongoose')

let Schema = mongoose.Schema

Project = new Schema (
	{
		name: { type: String, required: true },
		picture: { type: String, default: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' },
		url: String,
		repo: String,
		tags: [String],
		description: { type: String, required: true },
		featured: { type: Boolean, default: true },
		updated: { type: Date, default: Date.now },
		date: { type: Date, default: Date.now }
	}
)

let ProjectModel = mongoose.model('Project', Project)

module.exports = ProjectModel