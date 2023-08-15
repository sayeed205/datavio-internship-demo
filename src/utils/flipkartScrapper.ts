import * as cheerio from 'cheerio';

export const flipkartScrapper = async (url: string) => {
    const response = await fetch(url).then(res => res.text());
    const $ = cheerio.load(response);
    const title = $(
        '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(1) > h1 > span'
    ).text();

    const price = $(
        '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._30jeq3._16Jk6d'
    ).text();

    const description = $(
        '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div._1YokD2._3Mn1Gg > div:nth-child(3) > div > div._2o-xpa > div._1mXcCf'
    ).text();

    const totalReviews = $(
        '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(1)'
    )
        .text()
        .split(' ')[0];
    const numberOfReviews = parseInt(totalReviews.replace(/,/g, ''));

    const totalRatings = $(
        '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(3)'
    )
        .text()
        .split(' ')[0]
        .trim();

    const numberOfRatings = parseInt(totalRatings.replace(/,/g, ''));

    const rating = $(
        '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span:nth-child(1)'
    )
        .text()
        .trim();

    const numberOfMedia = $(
        '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-5-12._78xt5Y > div:nth-child(1) > div > div._3li7GG > div._35DpL- > div > div._2mLllQ > ul'
    ).children().length;

    return {
        url,
        content: {
            title,
            price,
            description,
            numberOfReviews,
            numberOfRatings,
            rating: parseFloat(rating),
            numberOfMedia,
        },
    };
};
