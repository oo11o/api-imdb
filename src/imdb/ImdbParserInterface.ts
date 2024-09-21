import { MovieDTO } from '../DTO/movies/MovieDTO.js';

export interface ImdbParserInterface {
    getDetailsByIMDBId(id: string): Promise<MovieDTO>;
}
