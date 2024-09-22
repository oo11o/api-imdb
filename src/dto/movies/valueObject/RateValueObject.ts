/* eslint-disable no-empty-function */
class RateValueObject {
    constructor(
        private rate: number,
        private rateSource: string,
        private votesCount?: number
    ) {}

    public getRate(): number {
        return this.rate;
    }

    public getRateSource(): string {
        return this.rateSource;
    }

    public getVotesCount(): number | undefined {
        return this.votesCount;
    }
}

export { RateValueObject };
