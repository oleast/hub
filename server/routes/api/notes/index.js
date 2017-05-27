
const notes = require('express').Router()

const all = require('./all')
const featured = require('./featured')
const single = require('./single')
const latest = require('./latest')
const create = require('./create')

notes.get('/', (req, res) => {
    res.send({hello: 'notes'})
})
notes.use('/all', all)
notes.use('/featured', featured)
notes.use('/single', single)
notes.use('/latest', latest)
notes.use('/create', create)

module.exports = notes