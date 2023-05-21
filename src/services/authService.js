const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async ({ username, password }) => {
    const user = await User.findOne({ username: username });
    if (user) {
        return 'User with this username already exists!';
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        return user;
    }
};