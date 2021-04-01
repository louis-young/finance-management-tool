import type { Expense } from "../../types/expense";

export enum ExpenseActionType {
  Add,
  Edit,
  Delete,
}

interface ExpensesActionAdd {
  type: ExpenseActionType.Add;
  expenseToAdd: Expense;
}
interface ExpensesActionEdit {
  type: ExpenseActionType.Edit;
  expenseToEdit: Expense;
}

interface ExpensesActionDelete {
  type: ExpenseActionType.Delete;
  expenseToDeleteId: string;
}

export type ExpensesActions =
  | ExpensesActionAdd
  | ExpensesActionEdit
  | ExpensesActionDelete;
