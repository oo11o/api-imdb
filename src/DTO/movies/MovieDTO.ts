import {
    ActorValueObject,
    DirectorValueObject,
    ProducerValueObject,
    WriterValueObject,
    BudgetValueObject,
    RateValueObject,
} from './valueObject/index.js';

export interface MovieDTO {
    idImdb: string;
    lang: string;

    name: string;
    plot: string;

    countries: string[];
    taglines: string[];

    directors: DirectorValueObject[];
    writers: WriterValueObject[];
    producers: ProducerValueObject[];
    actors: ActorValueObject[];

    year: number;
    posterImage: string;

    type: string;

    genres: string[];
    keywords: string[];
    timeInSecond: number;
    budget: BudgetValueObject;

    allRates: RateValueObject[];
    ageCategoryTitle: string;
    scanDate: Date;
}
