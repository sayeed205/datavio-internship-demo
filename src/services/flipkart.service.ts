import mongoose from 'mongoose';
import { Flipkart } from '../schemas';
import { flipkartScrapper } from '../utils';

export const scrape = async (url: string, user_id: string) => {
    const flipkart = await Flipkart.findOne({
        url,
        user: new mongoose.Types.ObjectId(user_id),
    });

    if (flipkart) {
        return {
            ok: true,
            data: { url: flipkart.url, content: flipkart.content },
        };
    }

    const data = await flipkartScrapper(url);

    await Flipkart.create({
        ...data,
        user: new mongoose.Types.ObjectId(user_id),
    });

    return { ok: true, data };
};
