/* node JS */
var EmailModel = require('../tools/Email');
const ObjectId = require('mongodb').ObjectId;

module.exports = class LoginModel{

    //User connection
    static loginForAnyOne(db, email, password){
        return new Promise((resolve, reject)=> {
            db.collection("user").find(
                {
                    email : email,
                    password : password
                }
            ).toArray(function (err, result) {
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

    //generate code and send to mail
    static generateCodeInscription(email, name){
        return new Promise((resolve, reject)=> {
            let code = EmailModel.genererCode(email, name);
            let promise = EmailModel.sendCode(email, "Veuillez utiliser ce code pour continuer l'inscription", code);
            promise.then(value =>{
                resolve(value);
            }).catch(error =>{
                console.error(err);
                reject(error);
            });
        });
    }

    //inscription
    static inscription(db, name, email, password, idprofil, idresto, contact, code){
        return new Promise((resolve, reject)=> {
            if(EmailModel.verifierCode(email, name, code)){
                db.collection("user").insertOne(
                    {
                        name : name,
                        email : email,
                        pwd : password,
                        idprofil : idprofil,
                        idresto : idresto,
                        contact : contact
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
            }else{
                resolve({
                    "status": 400,
                    "data": "vérification du code de confirmation échouer"
                });
            }
        });
    }
    
}
