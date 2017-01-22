var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {

    let arrInventors = [];

    fs.readFile("./files/inventors.json", function (err, data) {
        arrInventors = JSON.parse(data);
        res.render('inventors.html', {title: 'Inventors', data: arrInventors});
    });

});

module.exports = router;
