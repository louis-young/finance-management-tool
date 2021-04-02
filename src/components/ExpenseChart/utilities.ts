import type { Expense } from "../../types/expense";
import type { Accumulator } from "./types";

const sumExpensesPerCategory = (expenses: Expense[]) => {
  const languages = expenses.reduce((accumulator: Accumulator, expense) => {
    const { category, amount } = expense;

    accumulator[category]
      ? (accumulator[category] += amount)
      : (accumulator[category] = amount);

    return accumulator;
  }, {});

  return languages;
};

const renameExpenseDataKeys = (expensesByCategory: Accumulator) => {
  const data = Object.entries(expensesByCategory).map(([key, value]) => ({
    name: key,
    value,
  }));

  return data;
};

export const formatExpenseChartData = (expenses: Expense[]) => {
  const summedExpensesPerCategory = sumExpensesPerCategory(expenses);

  const formattedExpenseChartData = renameExpenseDataKeys(
    summedExpensesPerCategory
  );

  return formattedExpenseChartData;
};

export const calculateExpensePercentage = (
  amount: number,
  totalExpenses: number
) => {
  const expensePercentage = Math.floor((amount / totalExpenses) * 100);

  return expensePercentage;
};
