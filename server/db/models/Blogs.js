//Require Mongoose
let mongoose = require('mongoose')

let Schema = mongoose.Schema

console.log('Hello from blogs start')

const Blog = new Schema (
	{
		title: { type: String, required: true , unique: true },
		image: { type: String, default: 'https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' },
		content: { type: String, required: true },
		featured: { type: Boolean, default: true },
		updated: { type: Date, default: Date.now },
		date: { type: Date, default: Date.now }
	}
)

console.log('Hello from blogs end')

module.exports = mongoose.model('BlogD', Blog)