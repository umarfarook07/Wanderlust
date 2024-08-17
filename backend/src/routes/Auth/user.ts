import express, { Request, Response } from 'express';
import { StatusCodes } from '../..';
import { User } from '../../models/userModel';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
const jwt_key = process.env.JWT_SECRET;
import { userValidate } from '../../utils/validate';
const router = express.Router();

type UserType = {
    _id: string,
    username: string
    password: string
}
router.post('/signup', async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const parsedPayload = userValidate.safeParse(payload);

        if (!parsedPayload.success) {
            return res.status(StatusCodes.BadRequest).json({
                error: 'Invalid Inputs'
            })
        }

        const isUserExist: UserType | null = await User.findOne({ username: payload.username });

        if (isUserExist) {
            return res.status(StatusCodes.Conflict).json(
                { message: 'User already exists!!' }
            );
        }

        const hashedPassword = await bcrypt.hash(payload.password, 8);

        const user = await User.create({
            username: payload.username,
            password: hashedPassword
        });

        const token: string = jwt.sign({ userId: user._id }, jwt_key!);

        const jwt_token: string = `Bearer ${token}`;

        res.status(StatusCodes.OK).json({
            message: 'Successfully created User',
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
        // recieve user credentials 
        const payload = req.body;
        const parsedPayload = userValidate.safeParse(payload);
        // check validations 
        if (!parsedPayload.success) {
            return res.status(StatusCodes.BadRequest).json({
                error: 'Invalid Inputs'
            })
        }
        // Find the User in the Database
        const isUserExist: UserType | null = await User.findOne({ username: payload.username });
        // Check if the User Exists
        if (!isUserExist) {
            return res.status(StatusCodes.Conflict).json(
                { message: 'User Not Found with given Credentials' }
            );
        }
        // Validate the Password
        const isPasswordMathed: boolean = await bcrypt.compare(payload.password, isUserExist.password);
        if (!isPasswordMathed) {
            return res.status(StatusCodes.BadRequest).json(
                { message: 'Invalid Password' }
            );
        }
        const token: string = jwt.sign({ userId: isUserExist._id }, jwt_key!);
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