import { ActorValueObject } from "../../../../src/dto/movies/valueObject/ActorValueObject";
import { RoleValueObject} from "../../../../src/dto/movies/valueObject/RoleValueObject";

describe('ActorValueObject', () => {
    it('should return the correct name', () => {
        const role = new RoleValueObject('Main Character');
        const actorVO = new ActorValueObject('John Doe', '12345', [role], 'Some extra info');
        expect(actorVO.getName()).toBe('John Doe');
    });

    it('should return the correct sourceId', () => {
        const role = new RoleValueObject('Main Character');
        const actorVO = new ActorValueObject('John Doe', '12345', [role], 'Some extra info');
        expect(actorVO.getSourceId()).toBe('12345');
    });

    it('should return the correct roles', () => {
        const role1 = new RoleValueObject('Main Character');
        const role2 = new RoleValueObject('Supporting Character');
        const actorVO = new ActorValueObject('John Doe', '12345', [role1, role2], 'Some extra info');
        expect(actorVO.getRoles()).toEqual([role1, role2]);
    });

    it('should return the correct extraInfo', () => {
        const role = new RoleValueObject('Main Character');
        const actorVO = new ActorValueObject('John Doe', '12345', [role], 'Some extra info');
        expect(actorVO.getExtraInfo()).toBe('Some extra info');
    });

    it('should return undefined for sourceId if not provided', () => {
        const role = new RoleValueObject('Main Character');
        const actorVO = new ActorValueObject('John Doe', undefined, [role]);
        expect(actorVO.getSourceId()).toBeUndefined();
    });

    it('should return undefined for extraInfo if not provided', () => {
        const role = new RoleValueObject('Main Character');
        const actorVO = new ActorValueObject('John Doe', '12345', [role]);
        expect(actorVO.getExtraInfo()).toBeUndefined();
    });
});