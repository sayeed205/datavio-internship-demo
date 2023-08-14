import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import morgan from 'morgan';

import { connectDB } from './config';
import { errorHandler } from './middleware';
import { authRouter, flipkartRouter } from './routes';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/flipkart', flipkartRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
