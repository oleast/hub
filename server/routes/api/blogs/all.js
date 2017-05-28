
module.exports = require('express')
    .Router()
        .get('/', (req, res) => {
        Blog.find()
            .exec()
            .then((blogs) => {
                res.send(blogs)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
