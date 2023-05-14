const mongoose = require('mongoose');
// •	Id - (ObjectId)
// •	Name - (String, required)
// •	ImageUrl - (String, required, http/https validation)
// •	Description - (String, required, max length validation)
// •	Cubes - (ObjectId, ref Cubes Model)
const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cubes: {
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }
});

const Acessory = mongoose.model('Accessory', accessorySchema);

module.exports = Acessory;