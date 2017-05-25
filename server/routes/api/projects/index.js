
const projects = require('express').Router()
const all = require('./all')
const featured = require('./featured')

projects.route('/all').get(all)
projects.get('/featured', featured)
projects.get('/', (req, res) => {
    res.send({projects: []})
})

module.exports = projects