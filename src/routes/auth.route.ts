import { Router } from 'express';
import { authController } from '../controllers';
import { validate } from '../middleware';
import { asyncHandler } from '../utils';
import { authValidation } from '../validations';

const router = Router();

router.post(
    '/signup',
    validate(authValidation.signup),
    asyncHandler(authController.signup)
);

router.post(
    '/login',
    validate(authValidation.login),
    asyncHandler(authController.login)
);

export const authRouter = router;
