const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (user) {
        return 'User with this email already exists!';
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        return user;
    }
};