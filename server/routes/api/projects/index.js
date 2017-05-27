
const projects = require('express').Router()
const all = require('./all')
const featured = require('./featured')
const create = require('./create')
const latest = require('./latest')

projects.get('/', (req, res) => {
    res.send({hello: 'projects'})
})
projects.use('/all', all)
projects.use('/featured', featured)
projects.use('/create', create)
projects.use('/latest', latest)

module.exports = projects