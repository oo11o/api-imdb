import { RateValueObject } from "../../../../src/dto/movies/valueObject/RateValueObject";

describe('RateValueObject', () => {
    it('should create a RateValueObject with given properties', () => {
        const rate = new RateValueObject(4.5, 'IMDB', 100);

        expect(rate.getRate()).toBe(4.5);
        expect(rate.getRateSource()).toBe('IMDB');
        expect(rate.getVotesCount()).toBe(100);
    });

    it('should return undefined for votesCount if not provided', () => {
        const rate = new RateValueObject(5, 'Rotten Tomatoes');

        expect(rate.getVotesCount()).toBeUndefined();
    });
});