
const blogs = require('express').Router()

const all = require('./all')
const featured = require('./featured')
const single = require('./single')
const create = require('./create')

blogs.get('/', (req, res) => {
    res.send({hello: 'blogs'})
})
blogs.use('/all', all)
blogs.use('/featured', featured)
blogs.use('/single', single)
blogs.use('/create', create)

module.exports = blogs