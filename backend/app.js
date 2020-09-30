// import (in Node, with 'require') Express (we installed it with npm) and make it a const
const express = require('express');

// import cors (we installed it with npm) as a const
const cors = require('cors');

// import body-parser (we installed it with npm) as a const
const bodyParser = require('body-parser');

// create an Express application and save it in a const 
const app = express();

// tell the app to use cors & body-parser
app.use(cors());
app.use(bodyParser.json())

// save user.js as a const  
const userRoutes = require('./user');
// set the static part of the login URL (DRY)
app.use('/api/user', userRoutes);

// export the app to connect it with the js server
module.exports = app;