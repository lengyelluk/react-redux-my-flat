import mongoose from 'mongoose';

import Card from './card';
import User from './user';
import Message from './message';
import Comment from './comment';
import Image from './image';

const connectDb = async () => {
	return mongoose.connect(process.env.DATABASE_URL, {useUnifiedTopology: true});
}

const models = { Card, User, Message, Comment, Image };

export { connectDb };
export default models;
