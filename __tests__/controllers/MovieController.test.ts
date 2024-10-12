import 'reflect-metadata';
import { Request, Response } from 'express';
import { MovieController} from "../../src/controllers/MovieController.js";
import { MovieServiceInterface} from "../../src/services/movie/MovieServiceInterface.js";
import { MovieDTO} from "../../src/dto/movies/MovieDTO.js";


// @ts-ignore
import { movieDTOFixture } from "../__fixtures__/movieDTOFixture";

// Створюємо мок-об'єкт для MovieServiceInterface
const mockMovieService: jest.Mocked<MovieServiceInterface> = {
    getMovie: jest.fn(),
};

const mockRequest = (): Partial<Request> => ({
    params: { id: '123' },
});

const mockResponse = (): Partial<Response> => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('MovieController', () => {
    let movieController: MovieController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        movieController = new MovieController(mockMovieService);
        req = mockRequest();
        res = mockResponse();
    });

    it('should return movie data if found', async () => {

        mockMovieService.getMovie.mockResolvedValue(movieDTOFixture);

        await movieController.getMovie(req as Request, res as Response);

        expect(mockMovieService.getMovie).toHaveBeenCalledWith('123');
        expect(res.json).toHaveBeenCalledWith(movieDTOFixture);
        expect(res.status).not.toHaveBeenCalled();
    });

    it('should return 404 if movie not found',
        async () => {
            mockMovieService.getMovie.mockResolvedValue(null);

            await movieController.getMovie(req as Request, res as Response);

            expect(mockMovieService.getMovie).toHaveBeenCalledWith('123');
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({error: 'Movie not found'});
        });

    it('should return 500 if service throws error', async () => {
        mockMovieService.getMovie.mockRejectedValue(new Error('Service error'));

        await movieController.getMovie(req as Request, res as Response);

        expect(mockMovieService.getMovie).toHaveBeenCalledWith('123');
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Error fetching movie data' });
    });
});
