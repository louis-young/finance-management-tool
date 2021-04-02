import type { Expense } from "../../types/expense";

export enum ExpensesActionType {
  Add,
  Edit,
  Delete,
}

export type ExpensesActions =
  | {
      type: ExpensesActionType.Add;
      expenseToAdd: Expense;
    }
  | {
      type: ExpensesActionType.Edit;
      expenseToEdit: Expense;
    }
  | {
      type: ExpensesActionType.Delete;
      expenseToDeleteId: string;
    };
