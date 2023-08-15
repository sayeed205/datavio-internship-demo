import { Router } from 'express';
import { flipkartController } from '../controllers';
import { auth, validate } from '../middleware';
import { asyncHandler } from '../utils';
import { flipkartValidation } from '../validations';
const router = Router();

router.post(
    '/',
    auth,
    validate(flipkartValidation.scrape),
    asyncHandler(flipkartController.scrape)
);

export const flipkartRouter = router;
