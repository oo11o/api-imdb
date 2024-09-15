class RateValueObject {
    constructor(
        private rate: number,
        private rateSource?: string,
        private votesCount?: number
    ) {}

    public getRate(): number {
        return this.rate;
    }
}

export {RateValueObject}