const { createCube } = require('../services/cubeService');

const router = require('express').Router();

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cube = await createCube({ name, description, imageUrl, difficultyLevel });
    res.redirect('/');
});

router.get('/details/:cubeId', (req, res) => {
    res.render('details');
});

module.exports = router;