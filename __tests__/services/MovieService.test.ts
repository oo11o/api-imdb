import 'reflect-metadata';
import { MovieService} from "../../src/services/movie/MovieService.js";
import { ImdbParserInterface} from "../../src/parser/ImdbParserInterface.js";
import { TYPES} from "../../src/config/TYPES.js";
import { Container } from 'inversify';
// @ts-ignore
import { movieDTOFixture } from "../__fixtures__/movieDTOFixture";

const mockImdbParser: ImdbParserInterface = {
    getDetailsByIMDBId: jest.fn()
};

describe('MovieService', () => {
    let movieService: MovieService;

    beforeEach(() => {
        const container = new Container();
        container.bind<MovieService>(MovieService).toSelf();
        container.bind<ImdbParserInterface>(TYPES.ImdbParserInterface).toConstantValue(mockImdbParser);

        movieService = container.get<MovieService>(MovieService);
    });

    it('should call getDetailsByIMDBId with correct movieId', async () => {

        (mockImdbParser.getDetailsByIMDBId as jest.Mock).mockResolvedValue(movieDTOFixture);
        const result = await movieService.getMovie('tt1234567');

        expect(mockImdbParser.getDetailsByIMDBId).toHaveBeenCalledWith('tt1234567');
        expect(result).toEqual(movieDTOFixture);
    });
});