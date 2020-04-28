import { Router } from 'express';
import multer from 'multer'
import auth from '../lib/auth';
import cloudinary from 'cloudinary'
import models from '../models'

const router = Router();

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
  });
  
  // This function is for filtering the files that are being upload to only be the specified types of 'images' & 'pdf'.
  const imageFilter = function(req, file, cb) {
    // accept image & pdf files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/i)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  };
  
  // Instantiating a multer instance, and passing our helper functions above to configure it properly, also passing a 'limit' property defining in 'bits' the size of limiting the uploaded file, in this case to 5mb.
  const upload = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: { fileSize: 5000000 }
  });

// API endpoint to upload a single file.
router.post(
    '/cloudinary/upload/single',
    upload.single('file'),
    async (req, res, next) => {
      try {
        // req.file holds multer uploaded file.
        // req.body holds any other form fields, if there are any.
        await cloudinary.v2.uploader.upload(
          req.file.path,
          async (err, result) => {
            if (err) {
              // In case of an error we log it out and send it back to the client.
              console.log('err', err);
              res.status(400).json({
                err: err
              });
            }
            // Otherwise, the upload was succesful & push the resulting Cloudinary url to our payload.
            // payload.photo = { url: result.secure_url };
            // Creating a new Album to be saved into the DB.
            const image = new models.Image({
                photo: {url: result.secure_url}
            });
  
            // Saving the model to the DB and awaiting the results, that we will then send back to the client.
            const payload = await image.save();
  
            if (payload) {
              // Send response back to the client.
              res.status(200).json({
                payload
              });
            }
          }
        );
      } catch (error) {
        next(error);
      }
    }
  );

export default router;