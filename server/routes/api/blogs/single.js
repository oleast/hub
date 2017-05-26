
const single = require('express').Router()

single.get('/:id', (req, res) => {
    res.send(
        [
            { 
                name: 'Some single article',
                id: req.params.id,
                picture: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9464-200.png',
                date: '2017-02-17'
            }
        ]
    )
})

module.exports = single