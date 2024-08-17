import { NextFunction, Response, Request, request } from "express";
import { StatusCodes } from "..";
import jwt from 'jsonwebtoken';
import { Admin } from "../models/adminModel";
import { AdminType } from "../types/types";
import dotenv from 'dotenv'
dotenv.config()
const jwt_key = process.env.JWT_SECRET;

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(StatusCodes.Unauthorized).json({
            message: 'Access Denied! No token provided.'
        });
    }
    try {
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, jwt_key as string) as jwt.JwtPayload;
        const adminId = decoded.adminId;
        const admin: AdminType | null = await Admin.findOne({ _id: adminId });
        if (!admin) {
            return res.status(StatusCodes.Unauthorized).json({
                message: 'Access Denied! You are Not Authorized'
            });
        }
        req.body.admin = admin;
        next();
    } catch (error: any) {
        return res.status(StatusCodes.Forbidden).json({
            message: 'Invalid token!',
            error: error.message
        });
    }
};
