const ObjectId = require('mongodb').ObjectId;
const constante = require('../tools/const.config');
module.exports = class RestoModel{
    static updateInfos(db, id, address, spec, accueil){
        return new Promise((resolve, reject)=> {
            db.collection("resto").findOneAndUpdate(
                { _id: new ObjectId(id)},
                {
                    $set: {
                        address: address,
                        spec: spec,
                        accueil: accueil
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

    static insert(db, name, address, spec, accueil){
        return new Promise((resolve, reject)=>{
            db.collection("resto").insertOne(
                {
                    name : name,
                    address : address,
                    spec : spec,
                    accueil : accueil
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

    static select (db, limit, numpage){
        let skips = limit * (numpage - 1);
        if(isNaN(limit))limit = Number.parseInt(constante.limitskip);
        if(isNaN(numpage))numpage = Number.parseInt(constante.numskip);
        return new Promise((resolve, reject)=> {
            db.collection("resto").find({})
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

    static fiche(db, id){
        return new Promise((resolve, reject)=> {
            db.collection("resto").find({
                //id: id
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
}