
module.exports = require('express')
    .Router()
    .post('/', requireAdmin, (req, res) => {
        console.log('Recieveing body: ' + JSON.stringify(req.body))
        Blog.remove({ _id:req.body.id })
            .then((blog) => {
                logger.log('Deleted Blog: ' + blog.title)
                res.end()
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
 