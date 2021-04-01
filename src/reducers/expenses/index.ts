import { Expense } from "../../types/expense";
import { getStoredExpenses } from "../../utilities/localStorage";
import { ExpenseActionType } from "./types";
import type { ExpensesActions } from "./types";

export const initialExpenses: Expense[] = [];

export const initialiser = () => {
  const expenses = getStoredExpenses();

  if (!expenses) {
    return initialExpenses;
  }

  return JSON.parse(expenses);
};

export const reducer = (expenses: Expense[], action: ExpensesActions) => {
  switch (action.type) {
    case ExpenseActionType.Add:
      return [...expenses, action.expenseToAdd];
    case ExpenseActionType.Edit:
      return expenses.map((expense) => {
        if (expense.id !== action.expenseToEdit.id) {
          return expense;
        }

        return action.expenseToEdit;
      });
    case ExpenseActionType.Delete:
      return expenses.filter(
        (expense) => expense.id !== action.expenseToDeleteId
      );
    default:
      return expenses;
  }
};
