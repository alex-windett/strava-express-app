var express = require('express');
var router = express.Router();
var strava = require('strava-v3');

router.get('/strava', function(req, res, next) {
    res.render('athlete/login')
});

router.get('/request_access', function(req, res, next) {
    res.redirect(
        strava.oauth.getRequestAccessURL({
            'scope' : 'view_private'
        })
    );
})

router.get('/token_exchange', function(req, res, next) {
    var code = req.query.code;
    strava.oauth.getToken(code, function(err, payload) {
        if ( !err ) {
            res.redirect('/athlete')
        }
    });
})

module.exports = router;
