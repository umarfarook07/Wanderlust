import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const url = process.env.MONGO_URL;
    if (!url) {
        throw new Error('MONGO_URL environment variable is not set');
    }

    try {
        await mongoose.connect(url);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};
export default connectDB;
