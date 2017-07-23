
// ///////////////////////////////////////////////////
// Server/Root File for the Project
// ///////////////////////////////////////////////////

// ///////////////////////////////////////////////////
// Include Statements
// ///////////////////////////////////////////////////

const express = require('express')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const passport = require('passport')

global.logger = require('winston')
global.appRoot = path.resolve(__dirname)

const models = require('./db/models')
global.Blog = models.blogs
global.Project = models.projects
global.Note = models.notes
global.User = models.users

const routes = require('./routes')

// ///////////////////////////////////////////////////
// Constants
// ///////////////////////////////////////////////////

const PORT = process.env.HUB_PORT || 8000
const HOST = process.env.HUB_HOST || '0.0.0.0'
const LOG_LEVEL = process.env.HUB_LOG_LEVEL || 'debug'
const ENV = process.env.HUB_ENV || 'development'
const SECRET = process.env.HUB_SECRET || 'MagicalNarwhalsAndPinkOrcasDancingTogetherInImaginationLand'

// ///////////////////////////////////////////////////
// Initial Server Setup
// ///////////////////////////////////////////////////

const app = express()

var sess = {
    secret: SECRET,
    cookie: {}
}
 
if (ENV === 'production') {
    app.set('trust proxy', 1) // trust first proxy 
    sess.cookie.secure = true // serve secure cookies 
}
 
app.use(session(sess))

app.set('view options', { pretty: true })
app.set('json spaces', 2)

app.use(cookieparser())
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(express.static('public'))
require('./passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

// Adjust the log level via environment variable
logger.level = LOG_LEVEL

app.use('/', routes)

const db = require('./db')

let server = app.listen(PORT, HOST, () => logger.info('Hub server running on: ' + HOST + ':' + PORT))

// ///////////////////////////////////////////////////
// End of file
// ///////////////////////////////////////////////////