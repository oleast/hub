
const all = require('express').Router()

const Project = require.main.require('./db/models').projects

all.get('/', (req, res) => {
    Project.find()
        .exec()
        .then((project) => {
            res.send(project)
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

module.exports = all