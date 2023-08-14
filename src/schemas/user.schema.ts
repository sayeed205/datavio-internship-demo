import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose, { model } from 'mongoose';

const userSchema = new mongoose.Schema(
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
    {
        statics: {
            isEmailTaken: async function (email: string): Promise<boolean> {
                const user = await this.findOne({ email });
                return !!user;
            },
        },
        methods: {
            generateToken: function () {
                // const user = this as any;
                const token = jwt.sign(
                    { id: this._id, email: this.email },
                    process.env.JWT_SECRET!
                );
                return token;
            },
        },
        timestamps: true,
    }
);

userSchema.pre('save', async function (next) {
    const user = this as any;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password!, salt);
    this.password = hash;
    next();
});

export const User = model('User', userSchema);

// export default User;
