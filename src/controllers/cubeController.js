const router = require('express').Router();

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/details/:cubeId', (req, res) => {
    res.render('details');
});

module.exports = router;