import express, { NextFunction, Request, Response } from 'express';
import { hotelSchema } from '../utils/validate';
import { StatusCodes } from '..';
import { IHotel } from '../types/types';
import { Hotel } from '../models/hotelsModel';
import { adminMiddleware } from '../middlewares/admin';
import { string } from 'zod';

const router = express.Router();

router.post('/add', adminMiddleware, async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const admin = req.body.admin;
        const parsedPayload = hotelSchema.safeParse(payload);

        if (!parsedPayload.success) {
            return res.status(StatusCodes.BadRequest).json({
                error: 'Invalid Inputs',
                details: parsedPayload.error.format()
            });
        }

        const isHotelExist: IHotel | null = await Hotel.findOne({ hotelName: payload.hotelName });

        if (isHotelExist) {
            return res.status(StatusCodes.Conflict).json({
                message: 'Hotel with the given name already exists!!'
            });
        }

        const hotel = await Hotel.create(payload);
        if (admin.ownedHotels.includes(hotel._id)) {
            return res.status(400).json({ msg: "Hotel already exists" });
        }

        admin.ownedHotels.push(hotel._id);
        await admin.save();

        console.log(admin);
        res.status(StatusCodes.OK).json({
            message: 'Successfully Added Hotel',
            hotel,
        });
    } catch (error) {
        console.error(`Internal Server Error: ${error}`);
        res.status(StatusCodes.InternalServerError).json({
            error: 'There was an internal error, please try again later.'
        });
    }
});
router.get('/hotels', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotels = await Hotel.find({});
        res.status(StatusCodes.OK).json({
            hotels
        });
    } catch (error) {
        console.error(`Internal Server Error: ${error}`);
        res.status(StatusCodes.InternalServerError).json({
            error: 'There was an internal error, please try again later.'
        });
    }
})
router.get('/getOwnedHotels', adminMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const admin = req.body.admin;
        const ownedHotelIds = admin.ownedHotels;

        const hotels = await Promise.all(
            ownedHotelIds.map((hotelId: string) => Hotel.findById(hotelId))
        );
        const hotelNames = hotels.map(hotel => hotel.hotelName);

        res.status(StatusCodes.OK).json({
            ownedHotel : hotelNames
        });
    } catch (error) {
        console.error(`Internal Server Error: ${error}`);
        res.status(StatusCodes.InternalServerError).json({
            error: 'There was an internal error, please try again later.'
        });
    }
});

export default router;
