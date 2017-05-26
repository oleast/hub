
const single = require('express').Router()

single.get('/:id', (req, res) => {
    res.send(
        [
            {
                name: 'Viestinta',
                id: req.params.id,
                picture: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
                url: 'https://viestinta.eu',
                repo: 'https://github.com/Viestinta/viestinta',
                tags: ['React', 'Docker', 'Expressjs', 'Postgresql', 'Socket.io', 'Redis', 'Open ID Connect', 'MaterialUI'],
                description: `Viestinta is a tool made to help student interact with a lecturer during lectures and presentations. 
                Viestinta utilizes a vast library of technologies to give students and lecturers the cleanest and easiest way to interact between eachother. 
                
                Students and lectureres log in with their university credentials trough FEIDE. 
                With the use of React, websockets and a Expressjs backend Viestinta delivers an interactive experience`
            }
        ]
    )
})

module.exports = single