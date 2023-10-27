const path = require('path');

const fileController = {
    uploadFile: (req, res) => {
        console.log('req', req);

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No Files Uploaded.');
        } else {
            let sampleFile;
            let uploadPath;

            sampleFile = req.files.image;
            console.log('sampleFile', sampleFile);
            uploadPath = path.join(__dirname, '..', '/uploads', sampleFile.name);
    
            sampleFile.mv(uploadPath, function(err) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.status(200).json({ message: 'Files Uploaded Successfully.' });
                }
            });
        } 
    }
}

module.exports = fileController;