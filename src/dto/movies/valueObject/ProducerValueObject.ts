/* eslint-disable no-empty-function */
class ProducerValueObject {
    constructor(
        private name: string,
        private sourceId: string | undefined,
        private extraInfo?: string | undefined
    ) {}

    public getName(): string {
        return this.name;
    }

    public getSourceId(): string | undefined {
        return this.sourceId;
    }

    public getExtraInfo(): string | undefined {
        return this.extraInfo;
    }
}

export { ProducerValueObject };
