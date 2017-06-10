
module.exports = require('express')
    .Router()
    .get('/', (req, res) => {
        Note.findOne({ _id: req.body.id })
            .exec()
            .then((note) => {
                res.send([note])
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    