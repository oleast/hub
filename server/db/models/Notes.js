//Require Mongoose
let mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
let Schema = mongoose.Schema

Note = new Schema (
	{
		title: { type: String, required: true , unique: true },
		image: { type: String, default: 'https://openclipart.org/download/247324/abstract-user-flat-1.svg' },
		content: { type: String, required: true },
		updated: { type: Date, default: Date.now },
		date: { type: Date, default: Date.now },
		slug: { type: String, slug: "title", slug_padding_size: 1,  unique: true }
	}
)

let NoteModel = mongoose.model('Note', Note)

module.exports = NoteModel