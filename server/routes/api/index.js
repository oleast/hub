
const api = require('express').Router()
const projects = require('./projects')
const blogs = require('./blogs')

api.get('/', (req, res) => {
    res.send({hello: 'world!'})
})
api.get('/projects', projects)
/*api.route('/projects/all').get((req, res) => {
    res.send({
            name: 'Viestinta',
            id: '1',
            picture: 'https://media.stuff.org/bilde.jpg',
            url: 'https://viestinta.eu'
        }, {
            name: 'Project2',
            id: '3',
            picture: 'https://media.stuff.org/bilde.jpg',
            url: 'https://samfundet.stokkers.no'
        })
})*/
api.get('/blogs', blogs)

module.exports = api