const express = require('express');
const app = express();
let bodyParser = require('body-parser');

// [!] : middleware pour la structuration des requetes particuliers (ex : POST)
app.use(bodyParser.json()); // Lit l'élément Json dans l'url(s'il y en a)
app.use(bodyParser.urlencoded({ extended: true })); // Supporte les bodies encodés

require('./dotenv')

// [!] : definition des routes
//angular
app.use("/", express.static("public/dist"));
//api
app.use('/api/plat', require("./controller/PlatController"));

// [!] : middleware qui capture tous les erreurs 404
const isProduction = process.env.NODE_ENV === 'production'
    const port = isProduction ? 7500 : 3005
    app.listen(port, function () {
      console.log(`listening on ${port}`)
    })