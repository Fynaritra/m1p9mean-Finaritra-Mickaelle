const express = require('express');
const app = express();
const http = require('http').Server(app);
let bodyParser = require('body-parser');

// [!] : middleware pour la structuration des requetes particuliers (ex : POST)
app.use(bodyParser.json()); // Lit l'élément Json dans l'url(s'il y en a)
app.use(bodyParser.urlencoded({ extended: true })); // Supporte les bodies encodés

// [!] : middleware de Gestion du CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

require('./dotenv')

// [!] : definition des routes
//angular
app.use("/", express.static("public/dist"));
//bo
app.use('/bo/plat', require("./controller/PlatController"));

// [!] : middleware qui capture tous les erreurs 404
app.use((req, res, next) => {
	if ( res.status(404) ) {
		res.json({
			code : 404,
			error : true,
			detailed : req.url,
			data : "Error 404"
		});
	} else {
		next();
	}
});

// [!] : demarrage du serveur
const port = process.env.PORT;
const addr = process.env.SERVER_ADDR;
//console.log(`Listening on ${addr}:${port}`);
http.listen(port, function(){
	console.log(`Listening on ${ addr }:${ port }`);
});
