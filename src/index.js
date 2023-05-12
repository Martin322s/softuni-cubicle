const express = require('express');
const { initialDatabase } = require('../config/database');
const { initViewEngine } = require('../config/handlebars');
const app = express();
const port = process.env.PORT || 5500;

initViewEngine(app);

initialDatabase()
    .then(() => {
        console.log("Database initialized successfully!");
        app.listen(port, () => console.log(`Server is working at: http://localhost:${port}`));
    })
    .catch(err => {
        console.log(`Database error: ${err}`);
    });