const express = require('express');

const server = express();



server.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send("welcome to get request");
});

server.post('/', (req, res) => {
    res.status(201).send("welcome to post request");
});

server.delete('/', (req, res) => {
    res.send("welcome to delete request");
})

server.put('/', (req, res) => {
    res.send("welcome to put request");
});


server.listen(2900, () => {
    console.log("the server is running on port 2900");
});