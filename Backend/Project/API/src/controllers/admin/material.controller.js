const materialModal = require("../../models/material");

exports.create = async (request, response) => {
    const dataSave = request.body;

    materialModal(dataSave).save()
        .then((result) => {
            const data = {
                _status: true,
                _message: 'Record created succussfully !',
                data: result
            }

            response.send(data);
        })
        .catch((error) => {
            var errorMessages = {};

            for (var index in error.errors) {
                errorMessages[index] = error.errors[index].message;
            }

            const data = {
                _status: false,
                _message: 'Something went wrong !',
                _error: errorMessages,
                data: null
            }

            response.send(data);
        })
}

exports.view = async (request, response) => {

    var page = 1;
    var limit = 15;

    if(request.body){
        if(request.body.page != undefined && request.body.page != ''){
            page = request.body.page;
        }

        if(request.body.limit != undefined && request.body.limit != ''){
            limit = request.body.limit;
        }
    }

    var skip = (page-1) * limit;

    const andCondition = [
        {
            deleted_at: null,
        }
    ];

    const orCondition = [];

    if (request.body) {
        if (request.body.name != undefined) {
            if (request.body.name != '') {
                var name = new RegExp(request.body.name,"i");
                andCondition.push({ name: name })
            }
        }
    }

    if (andCondition.length > 0) {
        var filter = { $and: andCondition }
    } else {
        var filter = {}
    }

    if (orCondition.length > 0) {
        filter.$or = orCondition;
    }

    var totalRecords = await materialModal.find(filter).countDocuments();

    var paginate = {
        current_page : page, 
        total_pages : Math.ceil(totalRecords/limit),
        total_records : totalRecords
    }

    materialModal.find(filter)
        .select('name order status')
        .limit(limit).skip(skip)
        .sort({
            _id: 'desc'
        })
        .then((result) => {
            if (result.length > 0) {
                const data = {
                    _status: true,
                    _message: 'Data fetch successfully !',
                    _paginate : paginate,
                    _data: result
                }

                response.send(data)
            } else {
                const data = {
                    _status: false,
                    _message: 'No Record Found !',
                    _data: []
                }

                response.send(data)
            }
        })
        .catch(() => {
            const data = {
                _status: false,
                _message: 'Something went wrong !',
                _data: []
            }

            response.send(data)
        })
}

exports.details = async (request, response) => {

    materialModal.findOne({
        _id: request.params.id,
        deleted_at : null
    })
        .then((result) => {
            if (result) {
                const data = {
                    _status: true,
                    _message: 'Data fetch successfully !',
                    _data: result
                }

                response.send(data)
            } else {
                const data = {
                    _status: false,
                    _message: 'No Record Found !',
                    _data: null
                }

                response.send(data)
            }
        })
        .catch(() => {
            const data = {
                _status: false,
                _message: 'Something went wrong !',
                _data: null
            }

            response.send(data)
        })
}

exports.update = async (request, response) => {
    const dataSave = request.body;

    dataSave.updated_at = Date.now();

    materialModal.updateOne({
        _id: request.params.id
    }, {
        $set: dataSave
    })
        .then((result) => {
            const data = {
                _status: true,
                _message: 'Record updated succussfully !',
                data: result
            }

            response.send(data);
        })
        .catch((error) => {
            const data = {
                _status: false,
                _message: 'Something went wrong !',
                data: null
            }

            response.send(data);
        })
}

exports.changeStatus = async (request, response) => {
    materialModal.updateMany(
        { _id: request.body.ids },
        [
            {
                $set: {
                    status: { $not: "$status" }   // toggle status
                }
            }
        ],
        {
            updatePipeline: true
        }
    )
        .then((result) => {
            const data = {
                _status: true,
                _message: 'Status changed succussfully.',
                _data: result
            }

            response.send(data);

        })
        .catch((getError) => {

            const data = {
                _status: false,
                _message: 'Something went wrong !!',
                _data: ''
            }

            response.send(data);
        })
}

exports.destroy = async (request, response) => {
    const dataSave = {};

    dataSave.deleted_at = Date.now();

    materialModal.updateMany({
        _id: request.body.ids
    }, {
        $set: dataSave
    })
        .then((result) => {
            const data = {
                _status: true,
                _message: 'Record deleted succussfully !',
                data: result
            }

            response.send(data);
        })
        .catch((error) => {

            const data = {
                _status: false,
                _message: 'Something went wrong !',
                data: null
            }

            response.send(data);
        })
}