import * as movier from 'movier';
import {MovieDTO} from '../DTO/movies/MovieDTO';
import {ImdbParserInterface} from "./ImdbParserInterface";
import {
    ActorValueObject, BudgetValueObject,
    DirectorValueObject,
    ProducerValueObject,
    RateValueObject,
    RoleValueObject, WriterValueObject
} from '../DTO/movies/valueObject'

class MovierAdapter implements ImdbParserInterface {
    private movier = movier;

    async getDetailsByIMDBId(id: string): Promise<MovieDTO> {
        if (!id) {
            throw new Error('ID is required');
        }
        try {
            const result = await this.movier.getTitleDetailsByIMDBId(id);
            return  {
                actors: result.casts.map((item) => new ActorValueObject(
                    item.name,
                    item.source?.sourceId,
                    item.roles.map((role) => new RoleValueObject(role.name)),
                    item.extraInfo)),
                allRates: result.allRates.map((item) => new RateValueObject(
                    item.rate,
                    item.rateSource,
                    item.votesCount
                )),
                directors: result.directors.map((item) => new DirectorValueObject(
                    item.name,
                    item.source?.sourceId,
                    item.extraInfo
                )),
                writers: result.writers.map((item) => new WriterValueObject(
                    item.name,
                    item.source?.sourceId,
                    item.extraInfo
                )),
                producers: result.producers.map((item) => new ProducerValueObject(
                    item.name,
                    item.source?.sourceId,
                    item.extraInfo
                )),

                genres: result.genres,
                idImdb: id,
                countries: result.countriesOfOrigin,
                keywords: result.keywords,
                lang: result.detailsLang,
                type: result.mainType,
                name: result.name,
                plot: result.plot,
                posterImage: result.posterImage.url,
                taglines: result.taglines,
                timeInSecond: result.runtime.seconds,
                year: result.titleYear,

                budget: new BudgetValueObject(result.boxOffice?.budget, 'usd'),
                ageCategoryTitle: result.ageCategoryTitle,
                scanDate: new Date()
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to retrieve movie data: ${error.message}`);
            } else {
                throw new Error('Failed to retrieve movie data.');
            }
        }
    }
}

export { MovierAdapter };