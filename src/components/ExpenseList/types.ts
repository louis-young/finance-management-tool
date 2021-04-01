import type { Expense } from "../../types/expense";

export interface ExpenseListProps {
  expenses: Expense[];
  editExpense: (expenseToEdit: Expense) => void;
  deleteExpense: (expenseToDeleteId: string) => void;
}
