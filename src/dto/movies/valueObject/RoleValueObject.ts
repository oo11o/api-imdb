/* eslint-disable no-empty-function */
class RoleValueObject {
    constructor(
        private name: string,
        private image?: string
    ) {}

    public getName(): string {
        return this.name;
    }

    public getImage(): string | undefined {
        return this.image;
    }
}

export { RoleValueObject };
