
const projects = require('express').Router()
const all = require('./all')
const featured = require('./featured')
const create = require('./create')
const latest = require('./latest')
const del = require('./delete')
const feature = require('./feature')

projects.get('/', (req, res) => {
    res.send({hello: 'projects'})
})
projects.use('/all', all)
projects.use('/featured', featured)
projects.use('/create', create)
projects.use('/latest', latest)
projects.use('/delete', del)
projects.use('/feature', feature)
projects.use('/single', require('./single'))

module.exports = projects