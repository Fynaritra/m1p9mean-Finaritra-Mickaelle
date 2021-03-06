const express = require('express');
const router = express.Router();

var PlatModel = require('../modele/PlatModel');
var Connection = require('../db/Connection');

router.get('/', (req, res) => {
	res.json({
		status : 200,
		data : "Rien par ici"
	});
});

router.get('/all', (req, res) =>{
    let connection = new Connection();
	let dbpromise = connection.getDB("ekaly");
    dbpromise.then(function(db){
        const promise = PlatModel.get(db);
        promise.then(function(value){
            res.json(value);
        }).catch( error => {
            console.error(error);
            res.json({
                status : 400, // reponse http
                error : true, // pour signaler que ceci est une erreur
                detailed : `${error} : concernant la requête infos `, // erreur pour les devs
                data : "Une erreur est survenue lors de la requête" // pour les users
            });
        }).finally(()=>{
            connection.endConnection();
        });
    }).catch( error => {
        console.error(error);
        res.json({
            status : 400, // reponse http
            error : true, // pour signaler que ceci est une erreur
            detailed : `${error} : concernant la requête infos `, // erreur pour les devs
            data : "Une erreur est survenue lors de la requête" // pour les users
        });
    });
});

module.exports = router;