import type { Expense } from "../../types/expense";

export const calculateTotalExpenses = (expenses: Expense[]) => {
  const expenseAmounts = expenses.map((expense) => expense.amount);

  const totalExpenses = expenseAmounts.reduce((a, b) => a + b, 0);

  return totalExpenses;
};

export const formatMonetaryValue = (monetaryValue: number) => {
  return `£${monetaryValue.toLocaleString("GB")}`;
};
