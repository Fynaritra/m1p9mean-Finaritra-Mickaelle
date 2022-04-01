const express = require('express');
const app = express();
const conf = require('project.config');

//angular
app.use(express.static('./dist/ekaly-app'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ekaly-app/'}),
);

// [!] : demarrage du serveur
const port = process.env.PORT || conf.PORT;
const addr = process.env.SERVER_ADDR || 'localhost';
//console.log(`Listening on ${addr}:${port}`);

app.listen(port);