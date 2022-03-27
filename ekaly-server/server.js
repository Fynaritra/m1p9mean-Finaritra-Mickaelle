const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

// ========================
// Link to Database
// ========================
// Updates environment variables
// @see https://zellwk.com/blog/environment-variables/
require('./dotenv')

// Replace process.env.DB_URL with your actual connection string
const connectionString = process.env.DB_URL

MongoClient.connect(connectionString, { useUnifiedTopology: true },
)
  .then(client => {

    console.log('Connected to Database')
    const db = client.db('test')
    const devCollection = db.collection('devices')

    // ========================
    // Middlewares
    // ========================
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))


    /*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:<password>@cluster0.whxqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); 
    // ========================
    // Routes
    // ========================
    /backoffice/plats
      token
    /front/plats*/
    app.get('/backoffice', (req, res) => {
      db.collection('devices').find().toArray()
        .then(quotes => {
          res.render('backoffice.ejs', { quotes: quotes })
        })
        .catch(error => {
          res.sendFile('./index.html');
        });
    })
    // ========================
    // Listen
    // ========================
    const isProduction = process.env.NODE_ENV === 'production'
    const port = isProduction ? 7500 : 3000
    app.listen(port, function () {
      console.log(`listening on ${port}`)
    })
  })
  .catch(console.error)
