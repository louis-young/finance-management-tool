import type { Expense } from "../../types/expense";

export interface AddExpenseFormProps {
  addExpense: (expenseToAdd: Expense) => void;
}
