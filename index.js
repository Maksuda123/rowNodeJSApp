// Title: Up time monitoring Application
// Description: A restful api to monitoring App
// Author: Maksuda Mila
// Date: 12/5/2021

// dependencies
const http = require('http');

// app object
const app = {};
// app configuration
app.config = {
    port: 3333,
};
// server create
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};
// request response handler
app.handleReqRes = (req, res) => {
 //response handle
 res.end('hello world');
}

app.createServer();
