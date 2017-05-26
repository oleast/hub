
const api = require('express').Router()
const projects = require('./projects')
const blogs = require('./blogs')
const notes = require('./notes')

api.get('/', (req, res) => {
    res.send({hello: 'world!'})
})
api.use('/projects', projects)
api.use('/blogs', blogs)
api.use('/notes', notes)

module.exports = api