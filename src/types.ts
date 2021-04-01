import type { Expense } from "./types/expense";

export enum ExpenseActionType {
  Add,
  Edit,
  Delete,
}

export interface ExpensesActions {
  type: ExpenseActionType;
  expenseToAdd: Expense;
}
