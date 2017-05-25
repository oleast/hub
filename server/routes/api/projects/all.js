
const all = require('express').Router()

all.get('/', (req, res) => {
    res.send([
        {
            name: 'Viestinta',
            id: '1',
            picture: 'https://media.stuff.org/bilde.jpg',
            url: 'https://viestinta.eu'
        }, {
            name: 'Project2',
            id: '3',
            picture: 'https://media.stuff.org/bilde.jpg',
            url: 'https://samfundet.stokkers.no'
        }
    ])
})

module.exports = all