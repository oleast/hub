
module.exports = require('express')
    .Router()
    .get('/', (req, res) => {
        Note.find()
            .exec()
            .then((notes) => {
                res.send([notes.sort((p, q) => q.date - p.date)[0]])
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
