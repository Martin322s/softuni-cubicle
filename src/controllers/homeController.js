const { getAll } = require('../services/cubeService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const cubes = await getAll();
    res.render('home', { cubes });
});

router.post('/', async (req, res) => {
    const { search, from, to } = req.body;
    let cubes = await getAll();
    console.log(search, from, to);

    if (search) {
        cubes = cubes.filter(x => x.name.toLowerCase().includes(search?.toLowerCase()));
    }

    
    res.render('home', { cubes, search });
});

module.exports = router;