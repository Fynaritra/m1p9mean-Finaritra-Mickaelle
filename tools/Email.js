const nodemailer = require('nodemailer');
const TokenManager = require("../tools/TokenManager");

const duration = 10 //dix second

module.exports = class Email {
  
  //avoir le code d'un string
  static codeString(chaine){
    let tabChar = Array.from(chaine);
    let result = 0;
    tabChar.forEach(charactere => {
      result = result + charactere.charCodeAt();
    });
    return result;
  }

  //generer code de confirmation (inscription)
  static generateCode(email, pseudo) {
    let date = new Date();
    date = date.getDate()+""+date.getFullYear()+""+date.getMonth();
    let result1 = Email.codeString(pseudo);
    let result2 = Email.codeString(email)+result1;
    let result3 = Email.codeString(date)+result1;
    return "E-"+result2+""+result1+""+result3;
  }

  //verifier code de confirmation (inscription)
  static verifierCode(email, pseudo, code) {
    let date = new Date();
    date = date.getDate()+""+date.getFullYear()+""+date.getMonth();
    let result1 = Email.codeString(pseudo);
    let result2 = Email.codeString(email)+result1;
    let result3 = Email.codeString(date)+result1;
    return ("E-"+result2+""+result1+""+result3) == code;
  }
  
  //generer code de confirmation (oublier mot de passe)
  static genererCodeMDP(email) {
    let date = new Date();
    let result1 = Email.codeString(date.getDate()+"");
    let result2 = Email.codeString(date.getMonth()+"");
    let result4 = Email.codeString(email);
    return (result1+result4)+""+(result4+result2)+""+(result2+result1+result4);
  }

  //verifier code de confirmation (oublier mot de passe)
  static verifierCodeMDP(email, code) {
    let date = new Date();
    let result1 = Email.codeString(date.getDate()+"");
    let result2 = Email.codeString(date.getMonth()+"");
    let result4 = Email.codeString(email);
    return (result1+result4)+""+(result4+result2)+""+(result2+result1+result4) == code;  
  }

  /**
	 * Envoye d'un email lors de l'inscription
	 * @params {string} email
	 * @params {string} code
	 * @return bool
	 */
	static sendCode(email, message, code) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ekalyfy.no.reply@gmail.com',
        pass: 'Finaritra'
      },
      tls: {
        rejectUnauthorized: false
      }
    });  
    let mailOptions = {
      from: 'ekalyfy.no.reply@gmail.com',
      to: email,
      subject: message,
      text: code
    };

    return new Promise((resolve, reject)=>{
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            resolve(false);
        } else {
            console.log('Email sent: ' + info.response);
            resolve(true);
        }
      })
    })
  }

    
}