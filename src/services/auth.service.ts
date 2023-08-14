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
    const { email, password } = body;

    const user = await User.findOne({ email });
    if (!user) {
        throw new ErrorResponse('Invalid credentials', 401);
    }
    if (!(await user.isPasswordMatch(password))) {
        throw new ErrorResponse('Invalid credentials', 401);
    }
    const token = user.generateToken();
    return { ok: true, token };
};
