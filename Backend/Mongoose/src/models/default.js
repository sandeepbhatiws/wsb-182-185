const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            match: /^[a-zA-Z ]{2,15}$/,
            validate: {
                validator: async function (v) {
                    const name = await this.constructor.findOne({ name: v });
                    return !name;
                },
                message: props => `The specified name is already in use.`
            }

            // minlength : [2, 'Minimum length must be greathan than or equal to 2.'],
            // maxlength : [15, 'Maximum length must be less than or equal to 15.']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            // minlength : [2, 'Minimum length must be greathan than or equal to 2.'],
            // maxlength : [15, 'Maximum length must be less than or equal to 15.']
        },
        image: {
            type: String,
            default: '',
            // enum : ['red', 'blue']
        },
        order: {
            type: Number,
            min: [0, 'Minimum value must be greathan than or equal to 0.'],
            max: [1000, 'Maximum value must be less than or equal to 1000.'],
            default: 0
        },
        status: {
            type: Boolean,
            default: 1
        },
        created_at: {
            type: Date,
            default: Date.now()
        },
        updated_at: {
            type: Date,
            default: Date.now()
        },
        deleted_at: {
            type: Date,
            default: null
        },
    }
);

const defaultModal = mongoose.model('defaults', schema);

module.exports = defaultModal;