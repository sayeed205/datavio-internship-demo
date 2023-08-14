import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';

import { errorHandler } from './middleware';
import { authRouter } from './routes';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/auth', authRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
