// Import express package
const express = require('express');
const htmlRoutes = require('./Routes/htmlRoutes.js')
const apiRoutes = require('./Routes/apiRoutes.js');

// Initialize our app variable by setting it to the value of express()
const app = express();

//Set the port to listen on
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(express.static('public'));
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
