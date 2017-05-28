
module.exports = require('express')
    .Router()
    .post('/', (req, res) => {
        console.log('Recieveing body: ' + JSON.stringify(req.body))
        Project.findOne({ _id:req.body.id })
            .then((project) => {
                project.featured = req.body.featured
                project.save()
                    .then((project) => {
                        console.log('Set featured to ' + project.featured + ' on Project: ' + project.name)
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
