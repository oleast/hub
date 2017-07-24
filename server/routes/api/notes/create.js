module.exports = require('express')
    .Router()
    .post('/', requireAdmin, (req, res) => {
        console.log('Recieveing body: ' + JSON.stringify(req.body))
        Note.create(req.body)
            .then((note) => {
                logger.log('Created Note: ' + note.title)
                res.end()
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    