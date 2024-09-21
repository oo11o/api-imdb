import { BudgetValueObject } from "../../../../src/dto/movies/valueObject/BudgetValueObject";

describe('BudgetValueObject', () => {
    it('should return the correct budget', () => {
        const budgetVO = new BudgetValueObject(1000000, 'USD');
        expect(budgetVO.getBudget()).toBe(1000000);
    });

    it('should return undefined if budget is not provided', () => {
        const budgetVO = new BudgetValueObject(undefined, 'EUR');
        expect(budgetVO.getBudget()).toBeUndefined();
    });

    it('should return the correct currency', () => {
        const budgetVO = new BudgetValueObject(5000000, 'EUR');
        expect(budgetVO.getCurrency()).toBe('EUR');
    });
});