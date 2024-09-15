/* eslint-disable no-empty-function */
class BudgetValueObject {
  constructor(
    private budget: number | undefined,
    private currency: string,
  ) {}

  public getBudget(): number | undefined {
    return this.budget;
  }

  public getCurrency(): string {
    return this.currency;
  }
}

export { BudgetValueObject };
