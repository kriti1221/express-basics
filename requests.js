const express = require('express');

const server = express();



server.get('/', (req, res) => {
    res.send("welcome to get request");
});

server.post('/', (req, res) => {
    res.send("welcome to post request");
});

server.delete('/', (req, res) => {
    res.send("welcome to delete request");
})

server.put('/', (req, res) => {
    res.send("welcome to put request");
});


server.listen(2700, () => {
    console.log("the server is running on port 2700");
});