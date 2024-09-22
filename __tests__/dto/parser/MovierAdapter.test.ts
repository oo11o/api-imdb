import { MovierAdapter } from '../../../src/parser/MovierAdapter.js';
import * as movier from 'movier'; // Переконайтеся, що імпортуєте movier

jest.mock('movier', () => ({
    getTitleDetailsByIMDBId: jest.fn(),
}));

describe('MovierAdapter', () => {
    let movierAdapter: MovierAdapter;

    beforeEach(() => {
        movierAdapter = new MovierAdapter();
    });

    test('should return movie details when data is received', async () => {
        const mockData = {
            casts: [{ name: 'Actor 1', roles: [{ name: 'Role 1' }] }],
            allRates: [{ rate: 8.5, rateSource: 'IMDb', votesCount: 1000 }],
            directors: [{ name: 'Director 1' }],
            writers: [{ name: 'Writer 1' }],
            producers: [{ name: 'Producer 1' }],
            genres: ['Drama'],
            countriesOfOrigin: ['USA'],
            keywords: ['keyword1'],
            detailsLang: 'en',
            mainType: 'movie',
            name: 'Movie Title',
            plot: 'Movie plot',
            posterImage: { url: 'http://example.com/poster.jpg' },
            taglines: ['A tagline'],
            runtime: { seconds: 120 },
            titleYear: '2023',
            boxOffice: { budget: 1000000 },
            ageCategoryTitle: 'PG-13',
        };

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
