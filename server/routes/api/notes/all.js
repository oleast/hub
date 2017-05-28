
module.exports = require('express')
    .Router()
        .get('/', (req, res) => {
        Note.find()
            .exec()
            .then((notes) => {
                res.send(notes)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
