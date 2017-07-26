
module.exports = require('express')
    .Router()
    .get('/:id', (req, res) => {
        Project.findOne({ _id: req.params.id })
            .exec()
            .then((project) => {
                res.send(project)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    