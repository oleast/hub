module.exports = require('express')
    .Router()
    .get('/:slug', (req, res) => {
        Blog.findOne({ slug: req.params.slug })
            .exec()
            .then((blog) => {
                res.send(blog)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    