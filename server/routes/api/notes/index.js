
const notes = require('express').Router()

const all = require('./all')
const featured = require('./featured')
const single = require('./single')
const latest = require('./latest')

notes.get('/', (req, res) => {
    res.send({hello: 'notes'})
})
notes.use('/all', all)
notes.use('/featured', featured)
notes.use('/single', single)
notes.use('/latest', latest)

module.exports = notes