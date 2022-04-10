const express = require('express');
const router = express.Router();
const constante = require('../tools/const.config');

var CmdModel = require("../modele/CmdModel");

router.post('/insertAll', (req, res)=>{
    let connection = new Connection();
	let dbpromise = connection.getDB("ekaly");
    dbpromise.then(function(db){
        const promise = CmdModel.updatePlats(db, req.body.plats);
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
router.post('/insert', (req, res)=>{
    let connection = new Connection();
	let dbpromise = connection.getDB("ekaly");
    dbpromise.then(function(db){
        const promise = CmdModel.insert(db, req.body.idclient, req.body.idresto, req.body.plats, new Date());
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

router.put('/etat', (req,res)=>{
    let connection = new Connection();
	let dbpromise = connection.getDB("ekaly");
    dbpromise.then(function(db){
        const promise = CmdModel.updateEtat(db, req.body.idplat, req.body.idresto, req.body.action)
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

router.put('/updateQte', (req,res)=>{
    let connection = new Connection();
	let dbpromise = connection.getDB("ekaly");
    dbpromise.then(function(db){
        const promise = CmdModel.modif(db, req.body.id, req.body.idplat, Number.parseInt(req.body.quantite))
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

router.get('/all', (req, res)=>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = CmdModel.select(db, req.query.limit, req.query.numpage);
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

router.get('/fiche', (req, res)=>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = CmdModel.fiche(db, req.query.id);
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

router.get('/pers', (req, res)=>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = CmdModel.cmdParPers(db, req.query.idclient, req.query.etat);
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

router.get('/resto', (req, res)=>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = CmdModel.cmdParResto(db, req.query.idresto, req.query.daty1, req.query.daty2, req.query.etat);
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

router.get('/board', (req, res)=>{
    let connection = new Connection();
	let promise = connection.getDB("ekaly");
    promise.then(function(db){
        const promise = CmdModel.getDBResto(db, req.query.idresto, req.query.daty1, req.query.daty2);
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