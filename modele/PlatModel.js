/* node JS */

module.exports = class PlatModel{

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
        return new Promise((resolve, reject)=> {
            db.collection("plat").find(
                {
                    name : '/'.concat(name,'/'),
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
