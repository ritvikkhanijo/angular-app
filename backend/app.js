// import (in Node, with 'require') Express (we installed it with npm) and make it a const
const express = require('express');

// create an Express application and save it in a const 
const app = express();

// set the response of the Express app
app.use((req, res, _next) => {
    res.send('This is a response');
});

// export the app to connect it with the js server
module.exports = app;