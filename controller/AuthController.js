const express = require('express');
const router = express.Router();

var AuthModel = require('../modele/AuthModel');
var TokenManager = require('../tools/TokenManager');
var Connection = require('../db/Connection');

router.get('/', (req, get) => {
	res.json({
		status : 200,
		data : "Rien par ici"
	});
});

router.post('/login', (req, res) =>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = AuthModel.login(db, req.body.email, req.body.pwd);
        promise.then(function(value){
            if(value.data.length != 0){
                // on genere le token
                value.token = TokenManager.generateUsing({ email : req.body.email, pwd : req.body.pwd});
                res.json(value);
            }
            else{
                res.json({
                    status : 400, // reponse http
                    error : true, // pour signaler que ceci est une erreur
                    data : "Login ou mot de passe invalide" // pour les users
                });
            }
        }).catch( error => {
            console.error(error);
            res.json({
                status : 400, // reponse http
                error : true, 
                detailed : `${error} : concernant la requête infos `, // erreur pour les devs
                data : "Une erreur est survenue lors de la requête" 
            });
        }).finally(()=>{
            connection.endConnection();
        });
    });
});

router.post('/generateInscriptionCode', (req, res) =>{
    const promise = AuthModel.generateCodeInscription(req.body.email, req.body.name);
    promise.then(function(value){
        if(value){
            res.json({
                status : 200, // reponse http
                error : false, // pour signaler que ceci est une erreur
                data : "Email envoyé" // pour les users
            });
        }else{
            res.json({
                status : 400, // reponse http
                error : false, // pour signaler que ceci est une erreur
                data : "L'email n'a pas pu être envoyé" // pour les users
            });
        }
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

router.post('/inscription', (req, res) =>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = AuthModel.inscription(db, req.body.name, req.body.email, req.body.password, req.body.idprofil, req.body.contact, req.body.code);
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