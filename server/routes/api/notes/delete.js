
module.exports = require('express')
    .Router()
    .post('/', (req, res) => {
        console.log('Recieveing body: ' + JSON.stringify(req.body))
        Note.remove({ _id:req.body.id })
            .then((note) => {
                logger.log('Deleted Note: ' + note.title)
                res.end()
            })
            .catch((err) => {
                logger.error(err)
                res.status(404).send()
            })
    })
 