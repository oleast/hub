
const mongoose = require('mongoose')
const config = require('./config')

const mongodb = 'mongodb://' + config.host + ':' + config.port + '/' +config.dbName

console.log('Trying to connect to mongodb via Mongoose at: ' + mongodb)

mongoose.Promise = global.Promise

let db = mongoose.connect(mongodb)

module.exports = db 