import { MovieDTO } from '../../dto/movies/MovieDTO.js';

export interface MovieServiceInterface {
    getMovieByIMDBId(id: string): Promise<MovieDTO>;
}
