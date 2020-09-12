const router = require('express').Router();
// const Year = require('../db').import('../models/year');

//GET
router.get('/year',  function(req, res) {
    Year.findAll()
    res.send(req.params)
})

router.get('/year/:id', function(req, res) {
    res.send(req.params)
})

module.exports = router;