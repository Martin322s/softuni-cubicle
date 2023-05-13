const { getAll } = require('../services/cubeService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const cubes = await getAll();
    res.render('home', { cubes });
});

module.exports = router;