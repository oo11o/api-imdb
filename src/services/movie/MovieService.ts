import { inject, injectable } from 'inversify';
import { MovieServiceInterface } from './MovieServiceInterface.js';
import { ImdbParserInterface } from '../../parser/ImdbParserInterface.js';
import { MovieDTO } from '../../dto/movies/MovieDTO.js';
import { TYPES } from '../../config/TYPES.js';

@injectable()
export class MovieService implements MovieServiceInterface {
    constructor(
        @inject(TYPES.ImdbParserInterface)
        private readonly movie: ImdbParserInterface
    ) {
        // eslint-disable-next-line no-empty-function
    }

    async getMovie(movieId: string): Promise<MovieDTO> {
        return this.movie.getDetailsByIMDBId(movieId);
    }
}
