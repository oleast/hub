
const latest = require('express').Router()

latest.get('/', (req, res) => {
    Note.find()
        .exec()
        .then((note) => {
            res.send([note.sort((p, q) => q.date - p.date)[0]])
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

/*latest.get('/', (req, res) => {
    res.send(
        [
            {
                name: 'Why i made this page',
                id: '6',
                date: "2016-05-25",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            }
        ]
    )
})*/

module.exports = latest