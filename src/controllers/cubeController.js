const { createCube, getOne, createAccessory, getAllAccessories, getOneAccessory, attachAccessory } = require('../services/cubeService');

const router = require('express').Router();

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await createCube({ name, description, imageUrl, difficultyLevel, accessories: [] });
    res.redirect('/');
});

router.get('/details/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getOne(cubeId);
    res.render('details', {
        cube: cube
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

router.post('/attach/:cubeId', async (req, res) => {
    const { accessoryId } = req.body;
    const cubeId = req.params.cubeId;
    const accessory = await getOneAccessory(accessoryId)
    const cube = await getOne(cubeId);
    cube.accessories.push(accessory._id);
    await attachAccessory(cubeId, cube);
    res.redirect(`/cube/details/${cubeId}`);
});

module.exports = router;