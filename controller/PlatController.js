const express = require('express');
const router = express.Router();

var PlatModel = require('../modele/PlatModel');
var Connection = require('../db/Connection');

//Modif plat

//Saisie plat
router.post('/insert', (req, res)=>{
    
})
//Fiche plat
router.get('/fiche', (req, res) =>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = PlatModel.fichePlat(db, req.query.id);
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


//Plats par resto
router.get('/resto', (req, res) => {
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = PlatModel.chercherPlatResto(db, req.query.idresto, req.query.name, 5, 1);
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

//Recherche de plat par prix, nom de plat
router.get('/search', (req, res) =>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = PlatModel.chercherPrixPlat(db, req.query.nom, Number.parseInt(req.query.minprice), Number.parseInt(req.query.maxprice), Number.parseInt(req.query.limit), Number.parseInt(req.query.numpage));
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

//Tous les plats
router.get('/all', (req, res) =>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
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
    });
});

module.exports = router;