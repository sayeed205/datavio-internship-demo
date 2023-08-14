import mongoose, { Document, model } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        email: {
            type: String,
            unique: true,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

export const User = model<IUser>('User', userSchema);

// export default User;
