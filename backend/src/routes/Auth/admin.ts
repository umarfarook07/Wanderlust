import express, { Request, Response } from 'express';
import { StatusCodes } from '../..';
import { Admin } from '../../models/adminModel';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();
const jwt_key: string | undefined = process.env.JWT_SECRET;
import { adminValidate } from '../../utils/validate';
const router = express.Router();
import { AdminType } from '../../types/types';

router.post('/signup', async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const parsedPayload = adminValidate.safeParse(payload);

        if (!parsedPayload.success) {
            return res.status(StatusCodes.BadRequest).json({
                error: 'Invalid Input',
                details: parsedPayload.error.format()
            })
        }

        const isAdminExist: AdminType | null = await Admin.findOne({ username: payload.username });

        if (isAdminExist) {
            return res.status(StatusCodes.Conflict).json(
                { message: 'Admin already exists!!' }
            );
        }

        const hashedPassword = await bcrypt.hash(payload.password, 8);

        const admin = await Admin.create({
            username: payload.username,
            password: hashedPassword
        });
        
        const token: string = jwt.sign({ adminId: admin._id }, jwt_key!);
        
        const jwt_token: string = `Bearer ${token}`;
        
        res.status(StatusCodes.OK).json({
            message: 'Successfully created Admin',
            jwt_token
        });
    } catch (error) {
        res.status(StatusCodes.InternalServerError).json({
            error: `there was an internal error: ${error}`
        })
    }
});
router.post('/signin', async (req: Request, res: Response) => {
    try {
        // recieve admin credentials 
        const payload = req.body;
        const parsedPayload = adminValidate.safeParse(payload);
        // check validations 
        if (!parsedPayload.success) {
            return res.status(StatusCodes.BadRequest).json({
                error: 'Invalid Inputs'
            })
        }
        // Find the Admin in the Database
        const isAdminExist: AdminType | null = await Admin.findOne({ username: payload.username });
        // Check if the Admin Exists
        if (!isAdminExist) {
            return res.status(StatusCodes.Conflict).json(
                { message: 'Admin Not Found with given Credentials' }
            );
        }
        // Validate the Password
        const isPasswordMathed: boolean = await bcrypt.compare(payload.password, isAdminExist.password);
        if (!isPasswordMathed) {
            return res.status(StatusCodes.BadRequest).json(
                { message: 'Invalid Password Try Again..' }
            );
        }
        const token: string = jwt.sign({ adminId: isAdminExist._id }, jwt_key!);
        const jwt_token: string = `Bearer ${token}`;
        res.status(StatusCodes.OK).json({
            message: `Welcome Back ${payload.username}`,
            jwt_token
        });
    } catch (error) {
        res.status(StatusCodes.InternalServerError).json({
            error: `there was an internal error: ${error}`
        })
    }
});


export default router