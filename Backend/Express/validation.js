exports.validation = (request, response, next) => {

    console.log(request.query.token)
    if(request.query.token == undefined || request.query.token == ''){
        const data = {
            _status : false,
            _message : 'Required field missing !',
            _data : null
        }

        response.send(data);
    }

    if(request.query.token != 123456){
        const data = {
            _status : false,
            _message : 'Invalid Token !',
            _data : null
        }

        response.send(data);
    }

    next();
}