
const api = require('express').Router()

api.get('/all', (req, res) => {
    res.send([
        { 
            name: 'Introduction to linux on microwaves',
            id: '1',
            picture: 'https://media.stuff.org/bilde.jpg',
        }, {
            name: 'How to set up docker on a toaster',
            id: '3',
            picture: 'https://media.stuff.org/bilde.jpg',
        }
    ])
})

api.get('/', (req, res) => {
    res.send({
        name: 'Project1',
        id: req.id,
        picture: 'https://media.stuff.org/bilde.jpg'
    })
})

module.exports = api