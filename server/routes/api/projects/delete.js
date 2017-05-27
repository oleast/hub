
const del = require('express').Router()

//const Project = require.main.require('./db/models').projects

del.post('/', (req, res) => {
    console.log('Recieveing body: ' + JSON.stringify(req.body))
    Project.remove({ _id:req.body.id })
        .then((project) => (err, project) => {
            logger.log('Deleted Project: ' + project.name)
            res.end()
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

module.exports = del