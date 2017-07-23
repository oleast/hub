module.exports = require('express')
    .Router()
    .post('/', requireAdmin, (req, res) => {
        console.log('Recieveing body: ' + JSON.stringify(req.body))
        Blog.create(req.body)
            .then((blog) => {
                logger.log('Created Blog: ' + blog.title)
                res.end()
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
    