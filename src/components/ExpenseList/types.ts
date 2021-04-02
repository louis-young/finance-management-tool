import type { Expense } from "../../types/expense";

export interface ExpenseListProps {
  expenses: Expense[];
  totalExpenses: number;
  editExpense: (expenseToEdit: Expense) => void;
  deleteExpense: (expenseToDeleteId: string) => void;
}
