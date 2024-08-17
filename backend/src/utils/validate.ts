import { z } from 'zod'

const emailValidate = z.string().email();
const nameValidate = z.string();
export const userValidate = z.object({
    username: z.union([emailValidate, nameValidate]),
    password: z.string().min(6, 'Password should be more than 6 characters')
}); 
export const adminValidate = z.object({
    username: z.string().email('message invalid email'),
    password: z.string()
}); 

const locationSchema = z.object({
    primaryAddress: z.string().max(100, "Primary Address can't exceed 100 characters"),
    pincode: z.string().optional(),
    state: z.string(),
    country: z.string(),
});

const contactInfoSchema = z.object({
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
});

const roomSchema = z.object({
    roomType: z.string(),
    pricePerNight: z.number().positive("Price per night must be a positive number"),
    availability: z.boolean(),
});

export const hotelSchema = z.object({
    hotelName: z.string().min(1, "Hotel name is required"),
    location: locationSchema,
    overview: z.string().max(500, "Overview can't exceed 500 characters"),
    contactInfo: contactInfoSchema,
    reviewCount: z.number().min(0, "Review count must be at least 0").default(0),
    rooms: z.array(roomSchema).nonempty("At least one room is required"),
});

