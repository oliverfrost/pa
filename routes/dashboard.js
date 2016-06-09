var express = require('express');
var router = express.Router();

/* GET Main Dashboard Page. */
router.get('/', function(req, res, next) {
    res.render('dashboard', { data: 'This is dasboard' });
});

module.exports = router;
