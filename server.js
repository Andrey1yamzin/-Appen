const http = require('http');

const server = http.createServer();
server.on('request', (req, res)=>{
    res.end('11111111111111111111111111111111');
});

server.listen(3000, ()=> console.log('cerver job'));