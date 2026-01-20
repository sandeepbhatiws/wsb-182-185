const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            match: /^[a-zA-Z ]{2,15}$/,
            // validate: {
            //     validator: async function (v) {
            //         const name = await this.constructor.findOne({ name: v, deleted_at : null });
            //         return !name;
            //     },
            //     message: props => `The specified name is already in use.`
            // }
        },
        parent_category_id : {
            type : String,
            required : [true, 'Parent Category is required'],
            ref : 'categories'
        },
        sub_category_id : {
            type : String,
            required : [true, 'Sub Category is required'],
            ref : 'sub_categories'
        },
        slug: {
            type: String,
            required: [true, 'Slug is required'],
        },
        image: {
            type: String,
            default : ''
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

const subSubCategoryModal = mongoose.model('sub_sub_categories', schema);

module.exports = subSubCategoryModal;