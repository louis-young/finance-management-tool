import type { Expense } from "../../types/expense";

export enum ExpensesActionType {
  Add = "ADD",
  Edit = "EDIT",
  Delete = "DELETE",
}

export type ExpensesActions =
  | {
      type: ExpensesActionType.Add;
      payload: {
        expenseToAdd: Expense;
      };
    }
  | {
      type: ExpensesActionType.Edit;
      payload: {
        expenseToEdit: Expense;
      };
    }
  | {
      type: ExpensesActionType.Delete;
      payload: {
        expenseToDeleteId: string;
      };
    };
