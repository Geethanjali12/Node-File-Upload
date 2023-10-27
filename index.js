const express = require('express');
const fileUpload = require('express-fileupload');
const router = require('./router/fileUploadRouter');

const app = express();

app.use(fileUpload());

app.use(express.json());
app.use('/', router);

app.listen(4000, () => {
    console.log('App is running');
});