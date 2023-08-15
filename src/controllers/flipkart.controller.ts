import { Response } from 'express';
import { AuthRequest } from '../middleware';
import { flipkartService } from '../services';

export const scrape = async (req: AuthRequest, res: Response) => {
    return res
        .status(200)
        .json(
            await flipkartService.scrape(
                req.body.url.split('?')[0],
                req.user?.id!
            )
        );
};
