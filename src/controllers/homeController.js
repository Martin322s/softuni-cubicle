const { getAll } = require('../services/cubeService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const cubes = await getAll();
    res.render('home', { cubes });
});

router.post('/', async (req, res) => {
    const { search, fromInput, toInput } = req.body;
    const from = Number(fromInput);
    const to = Number(toInput);
    const cubes = await getAll();
    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search?.toLowerCase()));
    res.render('home', { cubes: result.length > 0 ? result : cubes, search, fromInput, toInput });
});

module.exports = router;