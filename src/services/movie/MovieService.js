import * as movier from 'movier';

class MovieService {
    movier = movier;

    async getMovieByIMDBId(id) {
        // Використання бібліотеки для отримання даних
        const movieData = await movier.getTitleDetailsByIMDBId(id);
        const movieDTO = new MovieDTO(
            movieData.title,
            movieData.releaseYear,
            movieData.director
        );
        console.log(movieDTO);
        console.log(movieData);
        return movieData;
    }
}
export { MovieService };
