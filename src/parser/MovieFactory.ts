import {ImdbParserInterface} from "./ImdbParserInterface.js";
import {MovierAdapter} from "./MovierAdapter.js";

export class MovieFactory {
    static createAdapter(): ImdbParserInterface {
        const adapterType = process.env.MOVIE_ADAPTER_TYPE;

        if (!adapterType) {
            throw new Error('MOVIE_ADAPTER_TYPE is not defined');
        }

        switch (adapterType) {
            case 'movier':
                return new MovierAdapter();
            default:
                throw new Error('Unknown Movie Adapter type');
        }
    }
}