import type { Expense } from "../../types/expense";

export interface ExpenseChartProps {
  expenses: Expense[];
  totalExpenses: number;
}

export interface Accumulator {
  [key: string]: number;
}
