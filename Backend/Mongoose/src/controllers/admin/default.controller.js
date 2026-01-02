const defaultModal = require("../../models/default");

exports.create = async (request, response) => {

    const dataSave = request.body;

    defaultModal(dataSave).save()
    .then((result) => {
        const data = {
            _status : true,
            _message : 'Record created succussfully !',
            data : result
        }

        response.send(data);
    })
    .catch((error) => {

        // var errorMessages = [];

        // for(var index in error.errors){
        //     console.log(error.errors[index].message);
        //     errorMessages.push(error.errors[index].message);
        // }

        var errorMessages = {};

        for(var index in error.errors){
            errorMessages[index] = error.errors[index].message;
        }


        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _error : errorMessages,
            data : null
        }

        response.send(data);
    })

}

exports.view = async (request, response) => {

    // const condition = {
    //     deleted_at : null,
    //     status : true,
    //     order : {
    //         $lte : 10
    //     }
    // }

    const andCondition = [
        {
            deleted_at : null, 
        }
    ];

    const orCondition = [];

    if(request.body){
        if(request.body.order != undefined){
            if(request.body.order != ''){
                orCondition.push({ order : request.body.order })
            }
        }

        if(request.body.name != undefined){
            if(request.body.name != ''){
                orCondition.push({ name : request.body.name })
            }
        }
    }
    

    if(andCondition.length > 0){
        var filter = { $and : andCondition }
    } else {
        var filter = {}
    }

    if(orCondition.length > 0){
        filter.$or = orCondition;
    }

    defaultModal.find(filter)
    .select('name order image')
    .limit(20).skip(0)
    .sort({
        order : 'asc',
        _id : 'desc'
    })
    .then((result) => {
        if(result.length > 0){
            const data = {
                _status : true,
                _message : 'Data fetch successfully !',
                _data : result
            }

            response.send(data)
        } else {
            const data = {
                _status : false,
                _message : 'No Record Found !',
                _data : []
            }

            response.send(data)
        }
    })
    .catch(() => {
        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _data : []
        }

        response.send(data)
    })
}

exports.details = async (request, response) => {

}

exports.update = async (request, response) => {

}

exports.changeStatus = async (request, response) => {

}

exports.destroy = async (request, response) => {

}