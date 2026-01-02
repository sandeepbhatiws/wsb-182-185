const express = require('express');
const { view, create } = require('../controllers/color.controller');
const route = express.Router();

module.exports = server => {
    
    route.post('/create', create);

    route.get('/view', view);

    server.use('/colors', route);
}