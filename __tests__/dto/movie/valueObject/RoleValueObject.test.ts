import { RoleValueObject} from "../../../../src/dto/movies/valueObject/RoleValueObject";

describe('RoleValueObject', () => {
    it('should create a RoleValueObject with given name', () => {
        const role = new RoleValueObject('Actor');

        expect(role.getName()).toBe('Actor');
    });

    it('should create a RoleValueObject with optional image', () => {
        const roleWithImage = new RoleValueObject('Director', 'image.png');

        expect(roleWithImage.getName()).toBe('Director');
        expect(roleWithImage.getImage()).toBe('image.png');
    });

    it('should return undefined for image if not provided', () => {
        const role = new RoleValueObject('Producer');

        expect(role.getImage()).toBeUndefined();
    });
});