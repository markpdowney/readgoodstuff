var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/books', db.getAllBooks);
router.get('/api/books/:id', db.getBook);


// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'node-postgres-promises'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
