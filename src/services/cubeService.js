const Cube = require('../models/Cube');

exports.createCube = async (cubeData) => {
    const cube = await Cube.create(cubeData);
    return cube;
}

exports.getAll = async () => await Cube.find().lean();