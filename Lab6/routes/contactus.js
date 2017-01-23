var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");


router.get('/', function (req, res, next) {
    res.render('form.html', {error_message: ''});
});

router.post('/', function (req, res, next) {

    var fullName = req.body.fullName;
    var type = req.body.type;
    var message = req.body.message;

    req.assert('fullName', "The Full name can't be empty").notEmpty();
    req.assert('message', "The message can't be empty").notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('form.html', {errors: errors});
        return;
    }

    var objData = {
        fullName: fullName,
        type: type,
        message: message,
    };

    const dataToFile = JSON.stringify(objData);
    const thePath = path.join(__dirname, '/files/contact.txt');

    fs.writeFile(thePath, dataToFile, 'utf8', (err) => {
        if (err) throw err;
        res.render('thankyou.html');
    });

});

module.exports = router;