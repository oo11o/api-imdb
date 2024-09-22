import { WriterValueObject} from "../../../../src/dto/movies/valueObject/WriterValueObject.js";

describe('WriterValueObject', () => {
    it('should create a WriterValueObject with given properties', () => {
        const writer = new WriterValueObject('John Smith', '12345', 'Some additional info');

        expect(writer.getName()).toBe('John Smith');
        expect(writer.getSourceId()).toBe('12345');
        expect(writer.getExtraInfo()).toBe('Some additional info');
    });

    it('should return undefined for sourceId if not provided', () => {
        const writer = new WriterValueObject('Jane Doe', undefined);

        expect(writer.getSourceId()).toBeUndefined();
    });

    it('should return undefined for extraInfo if not provided', () => {
        const writer = new WriterValueObject('Alex Brown', '54321');

        expect(writer.getExtraInfo()).toBeUndefined();
    });
});