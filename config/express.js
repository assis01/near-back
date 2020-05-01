const express = require('express');
const consign = require('consign');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = function() {
    let app = express();


    app.use(bodyParser.json({ }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('*', cors());


    app.use(morgan('combined'));
    let expresso = require('express');
    let router = expresso.Router();
    app.use('/api', router);
    consign()
        .then('./routes/auth.js')
        .then('./routes')
        .into(app, router);
    return app;
};