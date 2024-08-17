import mongoose, { Schema, model } from 'mongoose';
import { IAdmin } from '../types/types';

const adminSchema = new Schema<IAdmin>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    ownedHotels: [{
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    }]
});

export const Admin = model<IAdmin>('Admin', adminSchema);
