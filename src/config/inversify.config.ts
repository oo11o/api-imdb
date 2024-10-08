import { Container } from 'inversify';
import { ImdbParserInterface} from "../parser/ImdbParserInterface.js";
import { MovierAdapter} from "../parser/MovierAdapter.js";
import { MovieService} from "../services/movie/MovieService.js";
import {MovieServiceInterface} from "../services/movie/MovieServiceInterface.js";
import {TYPES} from "./TYPES.js";
import {MovieController} from "../controllers/MovieController.js";

const container = new Container();

container.bind<ImdbParserInterface>(TYPES.ImdbParserInterface).to(MovierAdapter);
container.bind<MovieServiceInterface>(TYPES.MovieServiceInterface).to(MovieService);
container.bind<MovieController>(TYPES.MovieController).to(MovieController);

export { container };