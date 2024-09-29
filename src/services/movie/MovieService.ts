import { inject, injectable } from 'inversify';
import { MovieServiceInterface} from "./MovieServiceInterface.js";
import {ImdbParserInterface} from "../../parser/ImdbParserInterface.js";
import {MovieDTO} from "../../dto/movies/MovieDTO.js";
import {TYPES} from "../../config/TYPES.js";

@injectable()
export class MovieService implements MovieServiceInterface{
    constructor(
        @inject(TYPES.ImdbParserInterface) private readonly movie: ImdbParserInterface
    ) {}

    async getMovie(movieId: string): Promise<MovieDTO> {
        return await this.movie.getDetailsByIMDBId(movieId);
    }
}
