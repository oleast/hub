
const routes = require('express').Router()
const path = require('path')
const passport = require('passport')

global.requireAdmin = (req, res, next) => {
    if (req.user && req.user.admin) {
        console.log('Protected route accessed by admin')
        next()
    } else {
        console.log('Protected route access attempted by unauthorized user')
        res.status(401).json({authorization: 'required'})
    }
}

const api = require('./api')

routes.use('/api', api)
routes.route('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'bundle.js'))
})
routes.post('/login', passport.authenticate( 'local-login', {} ),
        function( req, res ) {
            res.json({ success: true })
        })

routes.get('/logout', (req, res) => {
    req.logout()
})

routes.get('/login', passport.authenticate( 'local-login', {} ),
        function( req, res ) {
            res.send( 'Logged in!' )
        })

routes.get('/user', (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            user: {
                username: req.user.local.username,
                displayName: req.user.fullname || req.user.local.username,
                admin: req.user.admin
            }
        })
    } else {
        res.json({success: false})
    }
})

routes.route('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

module.exports = routes
