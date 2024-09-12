class ActorValueObject {
    constructor(
        private name: string,
        private sourceId: string,
        private roles: RoleValueObject[],
        private extraInfo?: string
    ) {}

    public getSourceId(): string {
        return this.sourceId;
    }

    public getName(): string {
        return this.name;
    }
}