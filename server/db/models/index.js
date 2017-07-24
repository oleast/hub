
const mongoose = require('mongoose')

/*const Projects = require('./Projects')
const Notes = require('./Notes')
const Blogs = require('./Blogs')*/

module.exports = {
    projects: require('./Projects'),
    notes: require('./Notes'),
    blogs: require('./Blogs'),
    users: require('./Users')
}