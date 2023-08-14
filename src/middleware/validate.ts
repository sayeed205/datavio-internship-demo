import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validate =
    (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });

            return next();
        } catch (error: unknown) {
            if (error instanceof ZodError) {
                console.log(error.issues);

                const errors = error.issues.map(issue => {
                    const { message } = issue;
                    return message;
                });

                return res.status(400).json({ ok: false, errors });
            }

            return res.status(500).json({ ok: false, error });
        }
    };