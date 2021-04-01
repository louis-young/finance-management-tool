import type { Expense } from "../../types/expense";

export interface ExpenseListItemProps {
  id: string;
  label: string;
  amount: number;
  category: string;
  editExpense: (expenseToEdit: Expense) => void;
  deleteExpense: (expenseToDeleteId: string) => void;
}
