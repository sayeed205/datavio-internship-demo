import { Request, Response } from 'express';
import { authService } from '../services';

export const signup = async (req: Request, res: Response) => {
    return authService.signup(req, res);
};

export const login = async (req: Request, res: Response) => {
    return authService.login(req, res);
};
