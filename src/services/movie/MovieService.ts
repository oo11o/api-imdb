// import * as movier from 'movier';
// import {ImdbServiceInterface} from "./ImdbServiceInterface.js";
//
// class ImdbService implements ImdbServiceInterface {
//     private movier = movier;
//
//     async getMovieByIMDBId(id: string): Promise<any> {
//         // Використання бібліотеки для отримання даних
//         const movieData = await movier.getTitleDetailsByIMDBId(id);
//
//         const movieDTO = new MovieDTO(
//             movieData.title,
//             movieData.releaseYear,
//             movieData.director
//         );
//         console.log(movieDTO);
//         console.log(movieData);
//         return movieData;
//     }
// }
//
// export { ImdbService };
