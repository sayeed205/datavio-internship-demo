import { Request, Response } from 'express';
import { authService } from '../services';

export const signup = async (req: Request, res: Response) => {
    return res.status(201).json(await authService.signup(req.body));
};

export const login = async (req: Request, res: Response) => {
    return res.status(200).json(await authService.login(req.body));
};
