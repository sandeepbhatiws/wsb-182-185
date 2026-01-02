const express = require('express');
const { categories, brands, productDetails } = require('./data');
const { validation } = require('./validation');

// Make Executable Function
const server = express();

route = express.Router();
route.use(validation);


server.get('/',(request, response) => {
    response.send('Server Started !');
});

route.get('/categories', (request, response) => {
    if(categories.length > 0){
        const data = {
            _status : true,
            _message : 'Record fetch succussfully !',
            _data : categories
        }

        response.send(data);
    } else {
        const data = {
            _status : false,
            _message : 'No Record Found !',
            _data : []
        }

        response.send(data);
    }
});

route.get('/brands', (request, response) => {
    if(brands.length > 0){
        const data = {
            _status : true,
            _message : 'Record fetch succussfully !',
            _data : brands
        }

        response.send(data);
    } else {
        const data = {
            _status : false,
            _message : 'No Record Found !',
            _data : []
        }

        response.send(data);
    }
});

server.get('/product-details', validation, (request, response) => {
    if(productDetails){
        const data = {
            _status : true,
            _message : 'Record fetch succussfully !',
            _data : productDetails
        }

        response.send(data);
    } else {
        const data = {
            _status : false,
            _message : 'No Record Found !',
            _data : null
        }

        response.send(data);
    }
});

server.use('/',route);

server.listen(5000, () => {
    console.log('Server is working Fine !')
});
