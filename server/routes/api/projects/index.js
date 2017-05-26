
const projects = require('express').Router()
const all = require('./all')
const featured = require('./featured')

projects.get('/', (req, res) => {
    res.send({hello: 'projects'})
})
projects.use('/all', all)
projects.use('/featured', featured)

module.exports = projects