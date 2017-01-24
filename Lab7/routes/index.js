var express = require('express');
var crypto =require('crypto');
var router = express.Router();
var algorithm ='aes256', password = 'asaadsaad';
var decrMessage = "";

/* GET home page. */
router.get('/', function(req, res, next) {

  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function(err, db){
    if(err) throw err;
    db.collection('homework7').findOne({}, function(err, doc){
          if(err) throw err;
          var decipher = crypto.createDecipher(algorithm,password);
          decrMessage = decipher.update(doc.message,'hex','utf8');
          decrMessage += decipher.final('utf8');
          console.dir(decrMessage);
          db.close();
          res.render('index', { title: decrMessage });
    });
  });
  //res.render('index', { title: decrMessage });
});

module.exports = router;
