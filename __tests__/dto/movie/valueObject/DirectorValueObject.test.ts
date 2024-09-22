import { DirectorValueObject } from "../../../../src/dto/movies/valueObject/DirectorValueObject.js";

describe('DirectorValueObject', () => {
    it('should return the correct name', () => {
        const director = new DirectorValueObject('Steven Spielberg', '123', 'Some info');
        expect(director.getName()).toBe('Steven Spielberg');
    });

    it('should return the correct sourceId', () => {
        const director = new DirectorValueObject('Christopher Nolan', '456');
        expect(director.getSourceId()).toBe('456');
    });

    it('should return undefined for sourceId if not provided', () => {
        const director = new DirectorValueObject('Quentin Tarantino', undefined);
        expect(director.getSourceId()).toBeUndefined();
    });

    it('should return the correct extraInfo (actually sourceId)', () => {
        const director = new DirectorValueObject('James Cameron', '789', 'More info');
        expect(director.getExtraInfo()).toBe('789'); // This returns sourceId instead of extraInfo
    });

    it('should return undefined for extraInfo if sourceId is not provided', () => {
        const director = new DirectorValueObject('Martin Scorsese', undefined);
        expect(director.getExtraInfo()).toBeUndefined();
    });
});