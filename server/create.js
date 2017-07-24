
let User = require('./db/models').users
const db = require('./db')

console.log('Loaded, continuing')

User.create({
    local: {
        username: 'admin',
        password: User.generateHash('admin')
    },
    admin: true,
    fullname: 'Admin Adminsson'
})
.then((user) => {
        console.log('Created User: ' + user.local.username)
    })
    .catch((err) => {
        console.error(err)
    })