//app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
//app.get('/api', (req, res) => res.json(noteData));

const app = require('express').Router();

const path = require('path');

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
        let chosen = req.params.id
        let oldNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8"))
        const newNote =oldNote.filter(oldNote => oldNote.id != chosen)
        fs.writeFileSync("./db/db.json",JSON.stringify(newNote))
        res.send(newNote)
    })


module.exports = app;