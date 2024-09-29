import { MovieDTO } from '../../dto/movies/MovieDTO.js';

export interface MovieServiceInterface {
    getMovie(id: string): Promise<MovieDTO>;
}
