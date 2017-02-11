var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({upload: null});

var fileUpload = upload.single('file');
/**
 * @swagger
 * /hf_api/fileservice/storeFile:
 *   post:
 *     tags:
 *       - File Service
 *     description: Upload file
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: file
 *         in: formData
 *         description: File To Upload
 *         required: true
 *         type: file
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: receipt of stored file
 *
 */
router.post('/storeFile', fileUpload, function(req, res) {

  //  console.log(req.file);
    if(!req.file)res.send({error:"File is not present"});
    console.log(req.file);
    res.send(req.file);
});


module.exports = router;
