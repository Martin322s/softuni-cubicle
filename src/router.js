const router = require('express').Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const authController = require('./controllers/authController');

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/users', authController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;