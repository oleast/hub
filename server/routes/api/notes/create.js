const create = require('express').Router()

//const Note = require.main.require('./db/models').notes

create.post('/', (req, res) => {
    console.log('Recieveing body: ' + JSON.stringify(req.body))
    Note.create(req.body)
        .then((note) => (err, note) => {
            logger.log('Created Note: ' + note.title)
            res.end()
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

module.exports = create