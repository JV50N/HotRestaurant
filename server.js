// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');


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

// dummy data
const customers = [{
        customerName: "Ahmed",
        customerEmail: "ahmed@example.com",
        customerID: "afhaque89",
        phoneNumber: "000-000-0000"
    },
    {
        customerName: "Ralph",
        customerEmail: "ralph@example.com",
        customerID: "ralph69",
        phoneNumber: "123-456-7890"
    },
    {
        customerName: "Vinny",
        customerEmail: "Vinny@example.com",
        customerID: "Vinny69",
        phoneNumber: "098-765-4321"
    },
    {
        customerName: "Jason",
        customerEmail: "Jason@example.com",
        customerID: "Jason69",
        phoneNumber: "696-969-6969"
    }
];

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// ----ROUTES GO HERE----

// root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// reserve.html
app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/reserve.html'));
});

// table.html
app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/tables.html'));
});

// get customer data
app.get("/api/customers?", (req, res) => {
    const chosen = req.params.customers


    if (chosen) {
        console.log(chosen);

        for (let i = 0; i < customers.length; i++) {
            if (chosen === customers[i].routeName) {
                return res.json(customers[i]);
            } 
           }
           return res.json(false);
        }
    return res.json(customers);
});

// Note how we export the array. This makes it accessible to other files using require.

module.exports = customers;


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});