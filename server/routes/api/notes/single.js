
module.exports = require('express')
    .Router()
    .get('/:id', (req, res) => {
        Note.findOne({ _id: req.params.id })
            .exec()
            .then((note) => {
                res.send(note)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    