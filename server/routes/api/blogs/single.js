
module.exports = require('express')
    .Router()
    .get('/:id', (req, res) => {
        Blog.findOne({ _id: req.params.id })
            .exec()
            .then((blog) => {
                res.send(blog)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    