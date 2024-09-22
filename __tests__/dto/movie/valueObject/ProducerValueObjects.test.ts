import { ProducerValueObject } from "../../../../src/dto/movies/valueObject/ProducerValueObject.js";

describe('ProducerValueObject', () => {
    it('should create a ProducerValueObject with given properties', () => {
        const producer = new ProducerValueObject('John Doe', '12345', 'Some extra info');

        expect(producer.getName()).toBe('John Doe');
        expect(producer.getSourceId()).toBe('12345');
        expect(producer.getExtraInfo()).toBe('Some extra info');
    });

    it('should return undefined for sourceId if not provided', () => {
        const producer = new ProducerValueObject('Jane Smith', undefined);

        expect(producer.getSourceId()).toBeUndefined();
    });

    it('should return undefined for extraInfo if not provided', () => {
        const producer = new ProducerValueObject('Alex Brown', '54321');

        expect(producer.getExtraInfo()).toBeUndefined();
    });
});