import mongoose, { Schema } from 'mongoose';

const imageSchema = new Schema({
    photo: {
        url: String,
    }
});

const Image = mongoose.model('Image', imageSchema);

export default Image;