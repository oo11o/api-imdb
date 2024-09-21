import { MovieDTO } from '../dto/movies/MovieDTO.js';

export interface ImdbParserInterface {
    getDetailsByIMDBId(id: string): Promise<MovieDTO>;
}
