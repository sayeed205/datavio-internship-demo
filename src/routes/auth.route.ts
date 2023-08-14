import { Router } from 'express';
import { authController } from '../controllers';
import { asyncHandler } from '../utils';

const router = Router();

router.post('/signup', asyncHandler(authController.signup));

router.post('/login', (req, res) => {
    res.json({ message: 'login' });
});

export const authRouter = router;
