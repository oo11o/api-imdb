class ProducerValueObject {
    constructor(
        private name: string,
        private sourceId: string | undefined,
        private extraInfo?: string | undefined
    ) {}

    public getSourceId(): string | undefined{
        return this.sourceId;
    }

    public getName(): string {
        return this.name;
    }
}

export {ProducerValueObject}