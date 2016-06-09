var express = require('express');
var router = express.Router();

/* GET Timer Page. */
router.get('/', function(req, res, next) {
    res.render('timer', { data: 'This is timer board' });
});

module.exports = router;
