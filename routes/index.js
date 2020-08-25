const express = require('express');

const router = express.Router();
const multer = require('multer');





//Storage

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname);
    }
})

// file size
const maxSize = 1* 1000 * 1000;
const upload = multer({storage: storage});



router.get('/', (req, res) => res.render('upload-page'));


router.post('/upload', (request, response) => {
	upload.single('myfile')(request, response, (err) => {
		if (err) {
			console.log('Error Occured', err);
			response.send(err);
			return;
		}
		console.log(request.file);
        response.redirect('/')
		console.log('file Uploaded');
	})
})

module.exports = router;