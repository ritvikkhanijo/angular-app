// import the module http included in NodeJS and make it a const
const http = require('http');
// import the Express app we created (app.js) as a const
const app = require('./backend/app');

// create a const to save the port
const port = process.env.PORT || 3000;
// set the port for the app
app.set('port', port);

// pass the Express app as an argument to the server
const server = http.createServer(app);

// make the server listen to the port (different to the Angular app)
server.listen(port);
