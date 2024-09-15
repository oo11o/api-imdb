class RoleValueObject {
    constructor(
        private name: string,
        private image?: string,
    ) {}

    public getName(): string {
        return this.name;
    }
}

export {RoleValueObject}