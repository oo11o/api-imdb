import { MovieFactory } from '../../../src/parser/MovieFactory.js';
import { MovierAdapter} from "../../../src/parser/MovierAdapter.js";

const originalEnv = process.env;

describe('MovieFactory', () => {
    beforeEach(() => {
        jest.resetModules();
        process.env = { ...originalEnv };
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    test('should return MovierAdapter when MOVIE_ADAPTER_TYPE is "movier"', () => {
        process.env.MOVIE_ADAPTER_TYPE = 'movier';
        const adapter = MovieFactory.createAdapter();

        expect(adapter).toBeInstanceOf(MovierAdapter);
    });

    test('should throw an error for unknown adapter type', () => {
        process.env.MOVIE_ADAPTER_TYPE = 'unknown';
        expect(() => MovieFactory.createAdapter()).toThrowError(
            'Unknown Movie Adapter type'
        );
    });

    test('should throw an error when MOVIE_ADAPTER_TYPE is not defined', () => {
        delete process.env.MOVIE_ADAPTER_TYPE;

        expect(() => MovieFactory.createAdapter()).toThrowError(
            'MOVIE_ADAPTER_TYPE is not defined'
        );
    });
});