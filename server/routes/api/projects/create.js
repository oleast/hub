
const create = require('express').Router()

//const Project = require.main.require('./db/models').projects

create.post('/', (req, res) => {
    console.log('Recieveing body: ' + JSON.stringify(req.body))
    Project.create(req.body)
        .then((project) => (err, project) => {
            logger.log('Created Project: ' + project.name)
            res.end()
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

module.exports = create