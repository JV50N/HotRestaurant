// dependencies
// ====================================
const express    = require('express'),
	  bodyParser = require('body-parser'),
	  path 	     = require('path');

// set up express server
// ====================================
const app  = express(),
	  port = 3000;

// set up express app to handle data parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes
// ====================================

// root
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// reserve.html
app.get('/api/reserve', (req, res) => {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

// starts the server to begin listening
// ======================================
app.listen(port, () =>{
	console.log('it works...');
});