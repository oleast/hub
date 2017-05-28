
const notes = require('express').Router()

const all = require('./all')
const single = require('./single')
const latest = require('./latest')
const create = require('./create')
const del = require('./delete')

notes.get('/', (req, res) => {
    res.send({hello: 'notes'})
})
notes.use('/all', all)
notes.use('/single', single)
notes.use('/latest', latest)
notes.use('/create', create)
notes.use('/delete', del)

module.exports = notes