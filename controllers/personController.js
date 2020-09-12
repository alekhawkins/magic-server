const router = require('express').Router();
// const Person = require('../db').import('../models/person');

//GET
router.get('/person',  function(req, res) {
    Person.findAll()
    res.send(req.params)
})

router.get('/person/:id', function(req, res) {
    res.send(req.params)
})

module.exports = router;