import mongoose, { Types } from 'mongoose';
import { User } from './user.schema';

const flipkartSchema = new mongoose.Schema(
    {
        user: {
            type: Types.ObjectId,
            ref: User.name,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        content: {
            _id: false,
            title: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
            numberOfRatings: {
                type: Number,
            },
            numberOfReviews: {
                type: Number,
            },
            rating: {
                type: Number,
            },
            numberOfMedia: {
                type: Number,
            },
        },
    },
    { timestamps: true }
);

export const Flipkart = mongoose.model('Flipkart', flipkartSchema);
