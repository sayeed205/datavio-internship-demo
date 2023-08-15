import { z } from 'zod';

export const scrape = z.object({
    body: z.object({
        url: z
            .string()
            .url()
            .transform((i, ctx) => {
                const isFlipkartURL = i.startsWith('https://www.flipkart.com/');
                const isValidURL = i.includes('/p/');

                if (!isFlipkartURL || !isValidURL) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid URL',
                    });

                    return z.NEVER;
                }

                const url = i.split('?')[0];
                return url;
            }),
    }),
});
