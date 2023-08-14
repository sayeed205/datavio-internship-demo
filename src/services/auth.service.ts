import { Request, Response } from 'express';

export const signup = async (req: Request, res: Response) => {
    return { ok: true, token: 'token' };
};
export const login = async (req: Request, res: Response) => {
    return { ok: true, token: 'token' };
};
