
module.exports = require('express')
    .Router()
    .get('/:slug', (req, res) => {
        Note.findOne({ slug: req.params.slug })
            .exec()
            .then((note) => {
                res.send(note)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    