import mongoose, { Schema } from 'mongoose';
import emailValidator from 'email-validator';
import bcrypt from 'bcrypt';

//validate user schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: false,
    trim: true,
    index: {unique: true},
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    index: {unique: true},
    validate: {
      validator: emailValidator.validate,
      message: props => `${props.value} is not a valid email address`,
    },
  },
  password: {
    type: String,
    unique: true,
    trim: true,
    index: {unique: true},
    minlength: 8,
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

export default User;