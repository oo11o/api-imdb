import 'reflect-metadata';
import { MovieService} from "../../src/services/movie/MovieService";
import { ImdbParserInterface} from "../../src/parser/ImdbParserInterface";
import { TYPES} from "../../src/config/TYPES";
import { Container } from 'inversify';
import { movieDTOFixture } from "../__fixtures__/movieDTOFixture";

// Підготовка моків
const mockImdbParser: ImdbParserInterface = {
    getDetailsByIMDBId: jest.fn() // створюємо мок для методу
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