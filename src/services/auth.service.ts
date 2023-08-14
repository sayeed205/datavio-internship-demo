import { User } from '../schemas';
import { ErrorResponse } from '../utils';

type authBody = {
    email: string;
    password: string;
};

export const signup = async (body: authBody) => {
    const { email, password } = body;
    if (await User.isEmailTaken(email)) {
        throw new ErrorResponse('Email is already taken', 409);
    }

    const user = await User.create({ email, password });
    const token = user.generateToken();
    return { ok: true, token };
};
export const login = async (body: authBody) => {
    return { ok: true, token: 'token' };
};
