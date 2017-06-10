
module.exports = require('express')
    .Router()
    .get('/', (req, res) => {
        Project.find()
            .exec()
            .then((projects) => {
                res.send([projects.sort((p, q) => q.date - p.date)[0]])
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })