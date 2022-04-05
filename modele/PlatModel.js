/* node JS */
const ObjectId = require('mongodb').ObjectId;
const constante = require('../tools/const.config');
module.exports = class PlatModel{

    static updateEtat(db, id, etat){
        
    }

    static insert(db, idResto, categorie, nom, description, prixvente, revient, etatcree){
        return new Promise((resolve, reject)=>{
            db.collection("plat").insertOne(
                {
                    nom : nom,
                    idResto : idResto,
                    categorie : categorie,
                    etat : Number.parseInt(etatcree),
                    description : description,
                    prixvente : Number.parseInt(prixvente),
                    revient: Number.parseInt(revient)
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
    static fichePlat(db, id){
        return new Promise((resolve, reject)=> {
            db.collection("plat").find({
                _id: new ObjectId(id)
            }).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(error);
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
    static chercherPlatResto(db, idresto, name, limit, numpage){
        if(limit==0)limit = constante.limitskip;
        if(numpage==0)numpage = constante.numskip;
        let skips = limit * (numpage - 1);
        return new Promise((resolve, reject)=> {
            db.collection("plat").aggregate(
                [{
                    $match:{
                        idResto: new ObjectId(idresto),
                        nom: new RegExp(name)
                    }
                },
                    {
                    $lookup:{
                        from: "resto",
                        localField: "idResto",
                        foreignField: "id",
                        as: "resto_dc"
                    }
                }
                ]
            )
            .skip(skips).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(error);
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
    
    static get(db){
        return new Promise((resolve, reject)=> {
            db.collection("plat").find({}).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(error);
					return;
                    //res.status(400).send("Error fetching listings!");
                } else {
                    //res.json(result);
                    resolve({
                        "status": 200,
                        "data": result
                    });
                }
            });
        });
    }

    static chercherPrixPlat(db, name, minprice, maxprice, limit, numpage){
        let skips = limit * (numpage - 1);
        if(limit==0){
            limit = 20;
        }
        console.log(name);
        return new Promise((resolve, reject)=> {
            if(isNaN(minprice))minprice=0;
            if(isNaN(maxprice))maxprice=9999999999;
            console.log(minprice);
            db.collection("plat").find(
                {
                    nom : new RegExp(name, "i"),
                    prixvente: {
                         $gte: minprice, 
                         $lte: maxprice
                    //     //$eq: val
                     },
                    etat : 1
                }
            )
            .skip(skips).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    reject(error);
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
