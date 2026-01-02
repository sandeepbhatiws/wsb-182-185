const express = require('express');
const database = require('./database.js');
const mongoDb = require('mongodb');

const server = express();

// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));


server.get('/', (request,response) => {
    response.send('Server is working Fine !');
});

server.get('/students/create', async(request, response) => {

    const dataSave = {
        name : request.query.name,
        email : request.query.email,
        mobile_number : request.query.mobile_number,
        age : request.query.age
    }

    const db = await database();
    db.collection('students').insertOne(dataSave)
    .then((result) => {
        const data = {
            _status : true,
            _message : 'Record created succussfully !',
            _data : result
        }

        response.send(data);  
    })
    .catch(() => {
        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(data);
    })

})

server.get('/students/view', async(request, response) => {

    const db = await database();
    db.collection('students').find().toArray()
    .then((result) => {
        if(result.length > 0){
            const data = {
                _status : true,
                _message : 'Record created succussfully !',
                _data : result
            }

            response.send(data);
        } else {
            const data = {
                _status : false,
                _message : 'No record found !',
                _data : []
            }

            response.send(data);
        }
          
    })
    .catch(() => {
        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(data);
    })

})

server.get('/students/details/:id', async(request, response) => {

    const db = await database();
    db.collection('students').findOne({
        _id : new mongoDb.ObjectId(request.params.id)
    })
    .then((result) => {
        if(result){
            const data = {
                _status : true,
                _message : 'Record found succussfully !',
                _data : result
            }

            response.send(data);
        } else {
            const data = {
                _status : false,
                _message : 'No record found !',
                _data : null
            }

            response.send(data);
        }
          
    })
    .catch(() => {
        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(data);
    })

})

server.get('/students/update/:id', async(request, response) => {

    const dataSave = {
        name : request.query.name,
        email : request.query.email,
        mobile_number : request.query.mobile_number,
        age : request.query.age
    }

    const db = await database();
    db.collection('students').updateOne({
        _id : new mongoDb.ObjectId(request.params.id)
    }, {
        $set : dataSave
    })
    .then((result) => {
        const data = {
            _status : true,
            _message : 'Record update succussfully !',
            _data : result
        }

        response.send(data);  
    })
    .catch(() => {
        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(data);
    })

})

server.get('/students/delete/:id', async(request, response) => {

    const db = await database();
    db.collection('students').deleteOne({
        _id : new mongoDb.ObjectId(request.params.id)
    })
    .then((result) => {
        const data = {
            _status : true,
            _message : 'Record delete succussfully !',
            _data : result
        }

        response.send(data);  
    })
    .catch(() => {
        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(data);
    })

})

require('./src/routes/color.routes.js')(server);

server.listen( 5000,() => {
    console.log('Server is working Fine !')
})