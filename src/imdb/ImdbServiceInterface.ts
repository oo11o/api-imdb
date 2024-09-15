import { MovieDTO } from "../DTO/movies/MovieDTO.js";

export interface ImdbServiceInterface {
  getMovieByIMDBId(id: string): Promise<MovieDTO>;
}
