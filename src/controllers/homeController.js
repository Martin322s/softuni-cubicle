const { getAll } = require('../services/cubeService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const cubes = await getAll();
    res.render('home', { cubes });
});

router.post('/', async (req, res) => {
    const { search, from, to } = req.body;
    let cubes = await getAll();

    if (search) {
        cubes = cubes.filter(x => x.name.toLowerCase().includes(search?.toLowerCase()));
    }

    if (from) {
        cubes = cubes.filter(x => x.difficultyLevel >= Number(from));
    }
    if (to) {
        cubes = cubes.filter(x => x.difficultyLevel <= Number(to));
    }
    res.render('home', { cubes, search, from, to });
});

module.exports = router;