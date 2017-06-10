
const blogs = require('express').Router()

const all = require('./all')
const featured = require('./featured')
const single = require('./single')
const create = require('./create')
const latest = require('./latest')
const feature = require('./feature')
const del = require('./delete')

blogs.get('/', (req, res) => {
    res.send({hello: 'blogs'})
})
blogs.use('/all', all)
blogs.use('/featured', featured)
blogs.use('/single', single)
blogs.use('/create', create)
blogs.use('/latest', latest)
blogs.use('/feature', feature)
blogs.use('/delete', del)

module.exports = blogs