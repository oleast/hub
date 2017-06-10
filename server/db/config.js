var config = {}


config.username = process.env.HUB_DB_USERNAME || 'hub'
config.password = process.env.HUB_DB_PASSWORD || 'password'
config.host = process.env.HUB_DB_HOST || 'localhost'
config.port = process.env.HUB_DB_PORT || 27017
config.dbName = process.env.HUB_DB_NAME || 'hub-db'

module.exports = config