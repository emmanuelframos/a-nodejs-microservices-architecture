const express = require('express');

const router = express.Router();

const uploadController = require('../controllers/upload-controller');

router
    .route('upload')
    .post(uploadController.upload);