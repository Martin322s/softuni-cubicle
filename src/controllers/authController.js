const router = require('express').Router();
const service = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    try {
        if (password === repeatPassword) {
            const user = await service.registerUser({ username, password });
        }
    } catch (error) {

    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;