const { getAll } = require('../services/cubeService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const cubes = await getAll();
    res.render('home', { cubes });
});

router.post('/', async (req, res) => {
    const { search, fromInput, toInput } = req.body;
    const difficultyFrom = Number(fromInput);
    const difficultyTo = Number(toInput);
    let cubes = await getAll();
    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search?.toLowerCase()));
    }

    if (difficultyFrom) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= difficultyFrom);
    }

    if (difficultyTo) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= difficultyTo);
    }
    res.render('home', { cubes, search, difficultyFrom, difficultyTo });
});

module.exports = router;