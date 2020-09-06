
var http = require('http');
const moment = require('moment');
var server = http.createServer((function (request, response) {
    response.writeHead(200,
        {
            "Content-Type": "text/plain"
        });
        const time = moment().format("HH:mm:ss");
    response.end(`time: ${time}`);
}));
server.listen(7000, () => {
    console.log('listening on localhost:7000');
});