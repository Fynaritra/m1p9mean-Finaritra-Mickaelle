const ObjectId = require('mongodb').ObjectId;
const constante = require('../tools/const.config');

module.exports = class LivraisonModel{
    //modif
    static modif(db, id, idplat){

    }

    //ajout filles
    static ajoutFille(db, id, [plats]){

    }

    //saisie
    static insert(db, idlivreur, idresto, [plats]){

    }

    //par resto
    static livParResto(db, idresto, etat){
        if(isNaN(limit))limit = Number.parseInt(constante.limitskip);
        if(isNaN(numpage))numpage = Number.parseInt(constante.numskip);
        let skips = limit * (numpage - 1);
        return new Promise((resolve, reject)=> {
            db.collection("livraison").aggregate(
                [{
                    $match:{
                        idresto: new ObjectId(idresto),
                        etat:{
                            $eq: Number.parseInt(etat)
                        }
                    }
                },
                    {
                    $lookup:{
                        from: "resto",
                        localField: "idresto",
                        foreignField: "_id",
                        as: "resto"
                    }
                }
                ]
            )
            .skip(skips).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(err);
					return;
                } else {
                    resolve({
                        "status": 200,
                        "data": result
                    });
                }
            });
        });
    }

    //par personne
    static livParPers(db, idlivreur, etat){
        if(isNaN(limit))limit = Number.parseInt(constante.limitskip);
        if(isNaN(numpage))numpage = Number.parseInt(constante.numskip);
        let skips = limit * (numpage - 1);
        return new Promise((resolve, reject)=> {
            db.collection("livraison").aggregate(
                [{
                    $match:{
                        idlivreur: new ObjectId(idlivreur),
                        etat:{
                            $gte: Number.parseInt(etat)
                        }
                    }
                },
                    {
                    $lookup:{
                        from: "utilisateur",
                        localField: "idlivreur",
                        foreignField: "_id",
                        as: "client"
                    }
                }
                ]
            )
            .skip(skips).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(err);
					return;
                } else {
                    resolve({
                        "status": 200,
                        "data": result
                    });
                }
            });
        });
    }

    //fiche
    static fiche(db, id){
        return new Promise((resolve, reject)=> {
            db.collection("livraison").find({
                _id: new ObjectId(id)
            }).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(err);
					return;
                } else {
                    resolve({
                        "status": 200,
                        "data": result
                    });
                }
            });
        });
    }
    //liste
    static select (db, limit, numpage){
        let skips = limit * (numpage - 1);
        if(isNaN(limit))limit = Number.parseInt(constante.limitskip);
        if(isNaN(numpage))numpage = Number.parseInt(constante.numskip);
        return new Promise((resolve, reject)=> {
            db.collection("livraison").find({})
            .skip(skips).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(err);
					return;
                } else {
                    resolve({
                        "status": 200,
                        "data": result
                    });
                }
            });
        });
    }
}