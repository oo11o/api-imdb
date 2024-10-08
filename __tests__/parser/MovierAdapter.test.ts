import { MovierAdapter } from '../../src/parser/MovierAdapter.js';
import * as movier from 'movier';
// @ts-ignore
import { movieFetchFixture } from "../__fixtures__/movieFetchFixture";

jest.mock('movier', () => ({
    getTitleDetailsByIMDBId: jest.fn(),
}));

describe('MovierAdapter', () => {
    let movierAdapter: MovierAdapter;

    beforeEach(() => {
        movierAdapter = new MovierAdapter();
    });

    test('should return movie details when data is received', async () => {
        const mockData = movieFetchFixture;
        (movier.getTitleDetailsByIMDBId as jest.Mock).mockResolvedValue(mockData);

        const result = await movierAdapter.getDetailsByIMDBId('tt1234567');

        expect(result).toEqual({
            actors: expect.arrayContaining([expect.any(Object)]),
            allRates: expect.arrayContaining([expect.any(Object)]),
            directors: expect.arrayContaining([expect.any(Object)]),
            writers: expect.arrayContaining([expect.any(Object)]),
            producers: expect.arrayContaining([expect.any(Object)]),
            genres: mockData.genres,
            idImdb: 'tt1234567',
            countries: mockData.countriesOfOrigin,
            keywords: mockData.keywords,
            lang: mockData.detailsLang,
            type: mockData.mainType,
            name: mockData.name,
            plot: mockData.plot,
            posterImage: mockData.posterImage.url,
            taglines: mockData.taglines,
            timeInSecond: mockData.runtime.seconds,
            year: mockData.titleYear,
            budget: expect.any(Object),
            ageCategoryTitle: mockData.ageCategoryTitle,
            scanDate: expect.any(Date),
        });
    });

    test('should throw an error if ID is empty', async () => {
        await expect(movierAdapter.getDetailsByIMDBId('')).rejects.toThrow('ID is required');
    });

    test('should throw a specific error message when a standard Error is thrown', async () => {
        const mockError = new Error('Network error');
        (movier.getTitleDetailsByIMDBId as jest.Mock).mockRejectedValue(mockError);

        await expect(movierAdapter.getDetailsByIMDBId('tt1234567')).rejects.toThrow('Failed to retrieve movie data: Network error');
    });

    test('should throw a general error message when a non-Error is thrown', async () => {
        const mockError = 'Unexpected error';
        (movier.getTitleDetailsByIMDBId as jest.Mock).mockRejectedValue(mockError);

        await expect(movierAdapter.getDetailsByIMDBId('tt1234567')).rejects.toThrow('Failed to retrieve movie data.');
    });
});
