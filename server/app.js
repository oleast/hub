
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
const logger = require('winston')
const path = require('path')

const routes = require('./routes')

// ///////////////////////////////////////////////////
// Constants
// ///////////////////////////////////////////////////

const PORT = process.env.HUB_PORT || 8000
const LOG_LEVEL = process.env.HUB_LOG_LEVEL || 'debug'

// ///////////////////////////////////////////////////
// Initial Server Setup
// ///////////////////////////////////////////////////

const app = express()

app.set('view options', { pretty: true })
app.set('json spaces', 2)

app.use(cookieparser())
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(express.static('public'))

// Adjust the log level via environment variable
logger.level = LOG_LEVEL

app.use('/', routes)

app.listen(PORT, () => logger.info('Hub server running on port ' + PORT))

// ///////////////////////////////////////////////////
// End of file
// ///////////////////////////////////////////////////