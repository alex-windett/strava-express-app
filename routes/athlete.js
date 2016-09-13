var express = require('express');
var router = express.Router();
var strava = require('strava-v3');

/* GET home page. */
router.get('/', function(req, res, next) {
    strava.athlete.get({}, function(err,payload) {
        if(!err) {
            res.render('athlete', {
                name: payload.firstname + ' ' + payload.lastname,
                bikes: payload.bikes,
                shoes: payload.shoes,
                profile: payload.profile
            });
        } else {
            res.semd(500)
        }
    });
});

module.exports = router;
