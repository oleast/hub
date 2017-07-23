
module.exports = require('express')
    .Router()
    .post('/', requireAdmin, (req, res) => {
        console.log('Recieveing body: ' + JSON.stringify(req.body))
        Blog.findOne({ _id:req.body.id })
            .then((blog) => {
                blog.featured = req.body.featured
                blog.save()
                    .then((blog) => {
                        console.log('Set featured to ' + blog.featured + ' on Blog: ' + blog.title)
                        res.end()
                    })
                    .catch((err) => {
                        console.error(err)
                        res.status(404).send()
                    })
            })
            .catch((err) => {
                console.error(err)
                res.status(404).send()
            })
    })
