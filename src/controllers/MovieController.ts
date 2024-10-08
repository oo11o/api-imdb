import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { MovieServiceInterface} from "../services/movie/MovieServiceInterface.js";
import { MovieDTO } from "../dto/movies/MovieDTO.js";
import { TYPES} from "../config/TYPES.js";

@injectable()
export class MovieController {
    constructor(
        @inject(TYPES.MovieServiceInterface) private readonly movieService: MovieServiceInterface
    ) {}

    async getMovie(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const movie = await this.movieService.getMovie(id);
            if (movie) {
               res.json(movie);
               return;
            }
            res.status(404).json({ error: 'Movie not found' });
        } catch (error) {
            res.status(500).json({ error: 'Error fetching movie data' });
        }
    }

    // async getAllMovies(req: Request, res: Response): Promise<void> {
    //     try {
    //         const movies = await this.movieService.getAllMovies();
    //         res.json(movies);
    //     } catch (error) {
    //         res.status(500).json({ error: 'Error fetching movies data' });
    //     }
    // }
    //
    //
    // async createMovie(req: Request, res: Response): Promise<void> {
    //     const movieData: MovieDTO = req.body;
    //     try {
    //         const newMovie = await this.movieService.createMovie(movieData);
    //         res.status(201).json(newMovie);
    //     } catch (error) {
    //         res.status(500).json({ error: 'Error creating movie' });
    //     }
    // }
    //
    // async updateMovie(req: Request, res: Response): Promise<void> {
    //     const { id } = req.params;
    //     const movieData: MovieDTO = req.body;
    //     try {
    //         const updatedMovie = await this.movieService.updateMovie(id, movieData);
    //         if (updatedMovie) {
    //             res.json(updatedMovie);
    //         } else {
    //             res.status(404).json({ error: 'Movie not found' });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ error: 'Error updating movie' });
    //     }
    // }
    //
    // async deleteMovie(req: Request, res: Response): Promise<void> {
    //     const { id } = req.params;
    //     try {
    //         const deleted = await this.movieService.deleteMovie(id);
    //         if (deleted) {
    //             res.status(204).send(); // No content
    //         } else {
    //             res.status(404).json({ error: 'Movie not found' });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ error: 'Error deleting movie' });
    //     }
    // }
}