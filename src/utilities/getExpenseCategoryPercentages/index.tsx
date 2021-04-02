import type { Expense } from "../../types/expense";
import type { Accumulator } from "./types";

export const getExpenseCategoryPercentages = (expenses: Expense[]) => {
  const languages = expenses.reduce((accumulator: Accumulator, expense) => {
    const { category, amount } = expense;

    accumulator[category]
      ? (accumulator[category] += amount)
      : (accumulator[category] = amount);

    return accumulator;
  }, {});

  return languages;
};
