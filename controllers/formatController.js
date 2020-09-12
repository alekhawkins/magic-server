const router = require('express').Router();
// const Format = require('../db').import('../models/format');

//GET
router.get('/format',  function(req, res) {
    Format.findAll()
    res.send(req.params)
})

router.get('/format/:id', function(req, res) {
    res.send(req.params)
})

module.exports = router;