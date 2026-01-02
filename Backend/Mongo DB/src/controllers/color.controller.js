const database = require('../../database.js');


exports.create = async(request, response) => {

    const dataSave = {
        name : request.body.name,
        code : request.body.code,
    }

    const db = await database();
    db.collection('colors').insertOne(dataSave)
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
}

exports.view = async(request, response) => {

    const db = await database();
    db.collection('colors').find().toArray()
    .then((result) => {
        if(result.length > 0){
            const data = {
                _status : true,
                _message : 'Record fetch succussfully !',
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
}

exports.details = async(request, response) => {

    const db = await database();
    db.collection('colors').findOne({
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
}

exports.update = async(request, response) => {

    const dataSave = {
        name : request.query.name,
        code : request.query.code,
    }

    const db = await database();
    db.collection('colors').updateOne({
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
}

exports.destroy = async(request, response) => {

    const db = await database();
    db.collection('colors').deleteOne({
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
}