import express, { Request, Response } from 'express';
import UserRoutes from './routes/authRoutes'
import HotelRoutes from './routes/hotelRoutes'
require('dotenv').config();
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

import connectDB from './config/db'
connectDB();

export enum StatusCodes {
    OK = 200,
    Created = 201,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    Conflict = 409,
    InternalServerError = 500,
    ServiceUnavailable = 503
}
app.use(express.json());
app.use(cors());
app.use('/api/auth', UserRoutes);
app.use('/hotel', HotelRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
