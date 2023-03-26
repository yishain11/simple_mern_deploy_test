const express = require('express');
const server = express();
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });
const PORT = process.env.PORT;
const distDir = path.join(__dirname, '../client/dist');

server.use(express.static(distDir));

server.get('/page', (req, res) => {
    res.sendFile(distDir + '/index.html').end();
    return;
});

server.get('/test', (req, res) => {
    res.send('hi from server').end();
    return;
});

server.listen(PORT, () => {
    console.log('server listening on port', PORT);
});
