const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(cors());

server.get('/', (request, response) => {
    response.send('Server Started !');
})

server.use('/uploads/categories', express.static('uploads/categories'));
server.use('/uploads/products', express.static('uploads/products'));

// Website


// Application


// Admin
require('./src/routes/admin/default.route')(server);
require('./src/routes/admin/material.route')(server);
require('./src/routes/admin/color.route')(server);
require('./src/routes/admin/category.route')(server);
require('./src/routes/admin/subCategory.route')(server);
require('./src/routes/admin/subSubCategory.route')(server);




server.listen(5000, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/wsb_185_offline').then(() => console.log('Connected!'));
})