
const create = require('express').Router()

const Project = require.main.require('./db/models').projects

create.post('/:name', (req, res) => {
    Project.create({
        name: req.params.name,
        description: 'This is a description'
    }).exec()
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