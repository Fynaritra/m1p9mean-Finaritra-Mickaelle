const express = require('express');
const router = express.Router();

var PlatModel = require('../modele/PlatModel');
var Connection = require('../db/Connection');

router.get('/plat', (req, res) => {
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = PlatModel.chercherPlatResto(db, req.query.idresto, req.query.name, Number.parseInt(req.query.limit), Number.parseInt(req.query.numpage));
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
    });
});

module.exports = router;