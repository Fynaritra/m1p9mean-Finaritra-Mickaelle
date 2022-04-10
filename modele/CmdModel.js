const ObjectId = require('mongodb').ObjectId;
const constante = require('../tools/const.config');

module.exports = class CmdModel{
    //nombre de plats vendus par resto
    static platsVendus(db, daty1, daty2){
        return new Promise((resolve, reject)=>{
            
        })
    }


    //CA, benefice par resto
    static getDBResto(db, idresto, daty1, daty2){
        return new Promise((resolve, reject)=>{
            db.collection("commande").aggregate([
                {
                    $match:{
                        idresto: new ObjectId(idresto),
                        etat: {
                            $gte: constante.etatlivre
                        },
                        daty:{
                            $gte: new Date(daty1),
                            $lte: new Date(daty2)
                        }
                    },
                    $group:{
                        _id: idresto,
                        ca: { 
                            $sum:{ $multiply: ["plats.$.prixvente", "plats.$.quantite"] }
                        },
                        revient: {
                            $sum:{ $multiply: ["plats.$.revient", "plats.$.quantite"] }
                        },
                        benefice:{
                            $sum:{ $substract: [$.$ca, $.$revient] }
                        }
                    }
                }
            ]).toArray(function(err, response){
                if(err){
                    reject(err);
                    return;
                }else{
                    resolve({
                        "status": 200,
                        "data": response
                    })
                }
            })
        })
    }

    //update etat
    static updateEtat(db, id, idResto, action){
        return new Promise((resolve, reject)=> {
            db.collection("commande").findOneAndUpdate(
                { _id: new ObjectId(id), idResto: idResto },
                {
                    $set: {
                        etat: etat
                    }
                },
                {
                    upsert: true
                }
            ).then(function(data) {
                if(data.ok==1){
                    resolve({
                        "status": 200,
                        "data": data.ops
                    });
                }else{
                    reject(data);
                }
            });
        });
    }


    //modif
    static modif(db, id, idplat, quantite){
        return new Promise((resolve, reject)=> {
            db.collection("commande").findOneAndUpdate(
                { _id: new ObjectId(id), "plats.$.idplat": new ObjectId(idplat)},
                {
                    $set: {
                        "plats.$.quantite": quantite
                    }
                },
                {
                    upsert: true
                }
            ).then(function(data) {
                if(data.ok==1){
                    resolve({
                        "status": 200,
                        "data": data.ops
                    });
                }else{
                    reject(data);
                }
            });
        });
    }

    static updatePlats(db, plat){
        return new Promise((resolve, reject)=> {
            db.collection("commande").findOneAndUpdate(
                { _id: new ObjectId(id)},
                {
                    $set: {
                        "plats": plat
                    }
                },
                {
                    upsert: true
                }
            ).then(function(data) {
                if(data.ok==1){
                    resolve({
                        "status": 200,
                        "data": data.ops
                    });
                }else{
                    reject(data);
                }
            });
        });
    }

    //saisie
    static insert(db, idclient, idresto, plats, daty){
        return new Promise((resolve, reject)=>{
            db.collection("commande").insertOne(
                {
                    idclient : idclient,
                    idresto : idresto,
                    daty: new Date(daty),
                    plats: plats,
                    etat : Number.parseInt(etatcree)
                }
            ).then(function(data) {
                if(data.insertedCount==1){
                    resolve({
                        "status": 200,
                        "data": data.ops
                    });
                }else{
                    reject(data);
                }
            });
        });
    }

    //par resto
    static cmdParResto(db, idresto, daty1, daty2, etat){
        if(isNaN(limit))limit = Number.parseInt(constante.limitskip);
        if(isNaN(numpage))numpage = Number.parseInt(constante.numskip);
        if(isNaN(etat))etat = contante.etatcree;
        let skips = limit * (numpage - 1);
        return new Promise((resolve, reject)=> {
            db.collection("commande").aggregate(
                [{
                    $match:{
                        idresto: new ObjectId(idresto),
                        etat:{
                            $eq: Number.parseInt(etat)
                        },
                        daty:{
                            $gte: new Date(daty1),
                            $lte: new Date(daty2)
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
    static cmdParPers(db, idclient, etat){
        if(isNaN(limit))limit = Number.parseInt(constante.limitskip);
        if(isNaN(numpage))numpage = Number.parseInt(constante.numskip);
        let skips = limit * (numpage - 1);
        return new Promise((resolve, reject)=> {
            db.collection("commande").aggregate(
                [{
                    $match:{
                        idclient: new ObjectId(idclient),
                        etat:{
                            $gte: Number.parseInt(etat)
                        }
                    }
                },
                    {
                    $lookup:{
                        from: "utilisateur",
                        localField: "idclient",
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
            db.collection("commande").find({
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
            db.collection("commande").find({})
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