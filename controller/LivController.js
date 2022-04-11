const express = require('express');
const router = express.Router();

var LivraisonModel = require('../modele/LivraisonModel');
var Connection = require('../db/Connection');

const AuthentificationRoutine = require("../tools/AuthentificationRoutine");
router.use((req, res, next) => {
	// on fait next si la session est bonne, on retourne une erreur sinon
	AuthentificationRoutine.check(req, res, next);
});

router.put('/livrer', (req, res) => {
    let connection = new Connection();
	let dbpromise = connection.getDB("ekaly");
    dbpromise.then(function(db){
        const promise = LivraisonModel.updateEtat(db, req.id, req.idlivreur, req.etat);
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

router.get('/mesliv', (req, res) =>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = LivraisonModel.livParPers(db, req.query.idlivreur, req.query.etat);
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

//Saisie livraison
router.post('/insert', (req, res)=>{
    let connection = new Connection();
	let dbpromise = connection.getDB("ekaly");
    dbpromise.then(function(db){
        const promise = LivraisonModel.insert(db, req.bodyidlivreur, req.body.idresto, req.body.adresse, req.body.date, req.body.idcommande, req.body.contact);
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
})



module.exports = router;