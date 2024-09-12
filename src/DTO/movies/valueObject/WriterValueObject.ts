class WriterValueObject {
    constructor(
        private name: string,
        private sourceId: string,
        private extraInfo?: string
    ) {}

    public getSourceId(): string {
        return this.sourceId;
    }

    public getName(): string {
        return this.name;
    }
}