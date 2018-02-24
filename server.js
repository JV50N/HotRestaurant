// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const 	express 	= require('express'),
		path 		= require('path'),
		bodyParser  = require('body-parser');


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// ----ROUTES GO HERE----

// root
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// reserve.html
app.get('/reserve', (req, res) => {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

// table.html
app.get('/tables', (req, res) => {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

// get all table data
// app.get('/api/:tables?', (req, res) => {

// });


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});