const express = require('express');
const { initialDatabase } = require('../config/database');
const app = express();
const port = process.env.PORT || 5500;

initialDatabase()
    .then(() => {
        app.listen(port, () => console.log(`Server is working at: ${port}...`));
    })
    .catch(err => {
        console.log(`Database error: ${err}`);
    });