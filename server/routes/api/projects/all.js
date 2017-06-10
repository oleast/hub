
module.exports = require('express')
    .Router()
        .get('/', (req, res) => {
        Project.find()
            .exec()
            .then((projects) => {
                res.send(projects)
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
