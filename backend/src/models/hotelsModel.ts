import { Schema, model } from 'mongoose';

import { IHotel } from '../types/types';

const hotelSchema = new Schema<IHotel>({
    hotelName: { type: String, required: true, unique:true},
    location: {
        primaryAddress: { type: String, required: true, maxlength: 100 },
        pincode: { type: String },
        state: { type: String, required: true },
        country: { type: String, required: true },
    },
    overview: { type: String, maxlength: 500, required:true},
    contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
        
    },
    topFacilities: { type: [String]},  
    mapsLink: { type: String},
    reviewCount: { type: Number, min: 0, max: 5 },
    reviews: {
        reviewerName: { type: String  },
        reviewContent: { type: String,  maxlength: 200 }
    },
    nearbyAreas: { type: [String], maxlength: 10 }, 
    rooms: [{
        roomType: { type: String, required: true },
        pricePerNight: { type: Number, required: true },
        availability: { type: Boolean, required: true }
    }],
    rating: { type: Number, min: 0, max: 5 },
    cancellationPolicy: { type: String },
});

export default hotelSchema;

export const Hotel = model<IHotel>('Hotel', hotelSchema);
