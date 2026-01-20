const express = require('express');
const { create, view, details, update, changeStatus, destroy } = require('../../controllers/admin/category.controller');
const route = express.Router();
const multer = require('multer')
multer({ dest: 'uploads/categories' })
const path = require('path');

module.exports = server => {

    // const uploadMiddleware = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/categories')
        },
        filename: function (req, file, cb) {
            var extension = path.extname(file.originalname);
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix+extension)
        }
    })

    const upload = multer({ storage: storage })

    var uploadImage = upload.single('image');

    route.post('/create', uploadImage, create);

    route.post('/view', upload.none(), view);

    route.post('/details/:id', upload.none(), details);

    route.put('/update/:id', uploadImage, update);

    route.put('/change-status', upload.none(), changeStatus);

    route.put('/delete', upload.none(), destroy);

    server.use('/api/admin/categories', route);
}