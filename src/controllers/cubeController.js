const { createCube, getOne, createAccessory, getAllAccessories } = require('../services/cubeService');

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

router.post('/create/accessory', async (req, res) => {
    await createAccessory(req.body);
    res.redirect('/');
});

router.get('/attach/acessory/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getOne(cubeId);
    const allAccessories = await getAllAccessories();
    res.render('attachAccessory', {
        _id: cube._id,
        name: cube.name,
        imageUrl: cube.imageUrl,
        accessories: allAccessories
    });
});

router.post('/attach', (req, res) => {
    const { accessoryId } = req.body;
    console.log(accessoryId);
});

module.exports = router;