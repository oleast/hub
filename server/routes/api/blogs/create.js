const create = require('express').Router()

//const Blog = require.main.require('./db/models').blogs

create.post('/', (req, res) => {
    console.log('Recieveing body: ' + JSON.stringify(req.body))
    Blog.create(req.body)
        .then((blog) => (err, blog) => {
            logger.log('Created Blog: ' + blog.title)
            res.end()
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

module.exports = create