import { Router } from 'express';
import { AuthRequest, auth } from '../middleware';
const router = Router();

router.post('/', auth, (req: AuthRequest, res) => {
    console.log(req.user);
    res.json({ message: 'Flipkart' });
});

export const flipkartRouter = router;
