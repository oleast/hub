
const routes = require('express').Router()
const path = require('path')

const api = require('./api')

routes.use('/api', api)
routes.route('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'bundle.js'))
})
routes.route('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

module.exports = routes
