
const featured = require('express').Router()

featured.get('/', (req, res) => {
    Blog.find({'featured': true})
        .exec()
        .then((blogs) => {
            res.send(blogs)
        })
        .catch((err) => {
            logger.error(err)
            res.status(404).send()
        })
})

/*featured.get('/', (req, res) => {
    res.send(
        [
            { 
                name: 'Introduction to linux on microwaves',
                id: '1',
                picture: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9464-200.png',
                date: '2017-02-17'
            }, {
                name: 'How to set up docker on a toaster',
                id: '3',
                picture: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9464-200.png',
                date: '2016-09-08'
            }
        ]
    )
})*/

module.exports = featured