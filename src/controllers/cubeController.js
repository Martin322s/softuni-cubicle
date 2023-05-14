const { createCube, getOne } = require('../services/cubeService');

const router = require('express').Router();

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await createCube({ name, description, imageUrl, difficultyLevel });
    res.redirect('/');
});

router.get('/details/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getOne(cubeId)
    res.render('details', {
        _id: cube._id,
        name: cube.name,
        imageUrl: cube.imageUrl,
        description: cube.description,
        difficultyLevel: cube.difficultyLevel
    });
});

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory');
});

router.get('/attach/acessory/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getOne(cubeId);
    res.render('attachAccessory', {
        _id: cube._id,
        name: cube.name,
        imageUrl: cube.imageUrl
    });
});

module.exports = router;