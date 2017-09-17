
module.exports = require('express')
    .Router()
    .get('/:slug', (req, res) => {
        Project.findOne({ slug: req.params.slug })
            .exec()
            .then((project) => {
                res.send(project)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    