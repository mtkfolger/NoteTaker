// Import express package
const express = require('express');


// Initialize our app variable by setting it to the value of express()
const app = express();

//Set the port to listen on
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(noteData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
