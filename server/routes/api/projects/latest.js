
const latest = require('express').Router()

const Project = require.main.require('./db/models').projects

latest.get('/', (req, res) => {
    Project.find()
        .exec()
        .then((project) => {
            res.send([project.sort((p, q) => q.date - p.date)[0]])
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

module.exports = latest