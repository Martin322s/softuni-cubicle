const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.createCube = async (cubeData) => await Cube.create(cubeData);
exports.getAll = async () => await Cube.find().lean();
exports.getOne = async (cubeId) => await Cube.findById({ _id: cubeId }).populate("accessories").lean();
exports.createAccessory = async (accessoryData) => await Accessory.create(accessoryData);
exports.getAllAccessories = async () => await Accessory.find().lean();
exports.getOneAccessory = async (accessoryId) => await Accessory.findById(accessoryId);
exports.attachAccessory = async (cubeId, cubeData) => await Cube.findByIdAndUpdate({ _id: cubeId}, cubeData);