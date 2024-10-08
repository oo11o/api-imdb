// @ts-ignore
import {
    ActorValueObject,
    BudgetValueObject,
    DirectorValueObject,
    ProducerValueObject,
    RateValueObject,
    RoleValueObject,
    WriterValueObject,
} from '../../src/dto/movies/valueObject/index.js';


import {MovieDTO} from "../../src/dto/movies/MovieDTO.js";
export const movieDTOFixture: MovieDTO = {
    actors: [
        new ActorValueObject(
            'Actor 1',          // name
            undefined,           // sourceId (відсутній у фікстурі)
            [new RoleValueObject('Role 1')], // roles
            undefined            // extraInfo (відсутній у фікстурі)
        )
    ],
    allRates: [
        new RateValueObject(
            8.5,                 // rate
            'IMDb',              // rateSource
            1000                 // votesCount
        )
    ],
    directors: [
        new DirectorValueObject(
            'Director 1',        // name
            undefined,           // sourceId (відсутній у фікстурі)
            undefined            // extraInfo (відсутній у фікстурі)
        )
    ],
    writers: [
        new WriterValueObject(
            'Writer 1',          // name
            undefined,           // sourceId (відсутній у фікстурі)
            undefined            // extraInfo (відсутній у фікстурі)
        )
    ],
    producers: [
        new ProducerValueObject(
            'Producer 1',        // name
            undefined,           // sourceId (відсутній у фікстурі)
            undefined            // extraInfo (відсутній у фікстурі)
        )
    ],
    genres: ['Drama'],             // genres
    idImdb: 'tt1234567',           // IMDb ID (додається вручну)
    countries: ['USA'],            // countriesOfOrigin
    keywords: ['keyword1'],        // keywords
    lang: 'en',                    // detailsLang
    type: 'movie',                 // mainType
    name: 'Movie Title',           // name
    plot: 'Movie plot',            // plot
    posterImage: 'http://example.com/poster.jpg', // posterImage.url
    taglines: ['A tagline'],       // taglines
    timeInSecond: 120,             // runtime.seconds
    year: 2023,                    // titleYear (перетворюємо в число)
    budget: new BudgetValueObject(
        1000000,                   // boxOffice.budget
        'usd'                      // валюта бюджету
    ),
    ageCategoryTitle: 'PG-13',     // ageCategoryTitle
    scanDate: new Date(),          // поточна дата сканування
};