const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { username, password, repeatPassword } = req.body;

    try {
        if (password === repeatPassword) {

        }
    } catch (error) {

    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;