import { Dispatch, SetStateAction } from "react";
import type { Expense } from "../../types/expense";

export interface EditExpenseFormProps {
  initialLabel: string;
  initialAmount: number;
  initialCategory: string;
  id: string;
  editExpense: (expenseToEdit: Expense) => void;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
