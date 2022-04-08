/* node JS */
var EmailModel = require('../tools/Email');

module.exports = class AuthModel{

    //user sign in
    static login(db, email, password){
        return new Promise((resolve, reject)=> {
            db.collection("utilisateur").find(
                {
                    email : email,
                    pwd : password
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
            let code = EmailModel.generateCode(email, name);
            let promise = EmailModel.sendCode(email, "Merci d'utiliser ce vode pour valider votre inscription", code);
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
                db.collection("utilisateur").insertOne(
                    {
                        name : name,
                        email : email,
                        password : password,
                        idprofil : idprofil,
                        idresto : idresto,
                        contact : contact
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
            }else{
                resolve({
                    "status": 400,
                    "data": "Code de vérification expiré ou invalide."
                });
            }
        });
    }
    
}
