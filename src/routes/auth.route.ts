import { Router } from 'express';

const router = Router();

router.post('/signup', (req, res) => {
    res.json({ message: 'signup' });
});

router.post('/login', (req, res) => {
    res.json({ message: 'login' });
});

export const authRouter = router;
