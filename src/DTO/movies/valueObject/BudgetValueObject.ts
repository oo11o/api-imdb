class BudgetValueObject{
    constructor(
        private budget: number,
        private currency: string,
    ) {}

    public getBudget(): number {
        return this.budget;
    }

    public getCurrency(): string {
        return this.currency;
    }
}