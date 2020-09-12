const router = require('express').Router();

//GET
router.get('/person',  function(req, res) {
    Person.findAll()
    res.send(req.params)
})

router.get('/person/:id', function(req, res) {
    res.send(req.params)
})

module.exports = router;