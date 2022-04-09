const express = require('express');
const path = require('path');
const app = express();
const conf = require('./project.config');

//angular
app.use(express.static(__dirname + '/dist/ekaly-app'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/ekaly-app/index.html'))
    //res.sendFile('index.html', {root: 'dist/ekaly-app/'}),
});

// [!] : demarrage du serveur
// const port = process.env.PORT || conf.PORT;
// const addr = process.env.SERVER_ADDR || 'localhost';
// //console.log(`Listening on ${addr}:${port}`);

// app.listen(port);

app.listen(process.env.PORT || 8080);