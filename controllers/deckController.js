const router = require('express').Router();

//GET
router.get('/deck',  function(req, res) {
    Deck.findAll()
    .then(deck => res.status(200)
    .json(deck))
    .catch(err => res.status(500)
    .json({
        error: err
    }))
})

router.get('/deck/:id', function(req, res) {
    res.send(req.params)
})

module.exports = router;