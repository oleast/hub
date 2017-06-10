
module.exports = require('express')
    .Router()
    .get('/', (req, res) => {
        Blog.findOne({ _id: req.body.id })
            .exec()
            .then((blog) => {
                res.send([blog])
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    