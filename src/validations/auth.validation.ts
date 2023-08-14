import { z } from 'zod';

export const signup = z.object({
    body: z.object({
        email: z.string().email(),
        password: z
            .string()
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
            ),
    }),
});

export const login = z.object({
    body: z.object({
        email: z.string().email(),
        password: z
            .string()
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
            ),
    }),
});
