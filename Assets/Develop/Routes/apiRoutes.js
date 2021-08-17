//app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
//app.get('/api', (req, res) => res.json(noteData));

const app = require('express').Router();

const fs = require('fs');

let db = require ('../db/db.json');

app.get('/notes' , (req,res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    res.json(db)
})


app.post('/notes', (req,res) => {
    //this is the model
    let newUserInput = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
    }

    db.push (newUserInput)

    fs.writeFileSync('./db/db.json', JSON.stringify(db))

res.json(db);

})

app.delete('/notes/:id', (req,res) => {
    let notesToKeep = []

    //if/ ifNot condition then push to notesToKeep, loop over db 
    //db.push(notesToKeep)
    //writeFileSync once array is correct.
})


module.exports = app;