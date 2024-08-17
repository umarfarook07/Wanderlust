import mongoose from "mongoose";

export type IHotel = {
    _id:string,
    hotelName: string;
    location: {
        primaryAddress: string;
        pincode?: number;
        state: string;
        country: string;
    };
    overview: string;
    contactInfo: {
        phone: string;
        email: string;
    };
    topFacilities?: string[];
    mapsLink?: string;
    reviewCount?: number;
    reviews?: {
        reviewerName: string;
        reviewContent: string;
    };
    nearbyAreas?: string[];
    rooms?: {
        roomType: string;
        pricePerNight: number;
        availability: boolean;
    }[];

    rating?: number;
    cancellationPolicy?: string;
}

export interface IUser {
    _id:string,
    username: string;
    password: string;
}
export interface IAdmin {
    _id:string,
    username: string;
    password: string;
    ownedHotels: mongoose.Types.ObjectId[];
}

export type AdminType = {
    _id: string,
    username: string
    password: string
}