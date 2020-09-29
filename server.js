// import the module http included in NodeJS and make it a const
const http = require('http');

// use this const http for the function createServer (takes 2 args: request and response)
const server = http.createServer((req, res) => {
    res.end('hello');
});

// make the server listen to a port (different to the Angular app)
server.listen(process.env.PORT || 3000);
